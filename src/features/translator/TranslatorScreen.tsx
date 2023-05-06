import {
   Confidence,
   ExchangeLanguage,
   Loader,
   SelectLanguage,
   TextCounter,
   TextInput
} from "lib/components"
import { Language, LanguageCode } from "lib/models"
import { useTranslations } from "lib/hooks";
import { APP_CONFIG } from "lib/config";
import { useLibreTranslate } from "./useLibreTranslate";
import * as $ from './styles'

type TranslatorScreenProps = {
   languages: Language[],
}

export const TranslatorScreen = ({
   languages,
}: TranslatorScreenProps) => {
   const T = useTranslations()
   const {
      selectedLanguages,
      setSelectedLanguages,
      query,
      handleQueryChange,
      autoDetectedLanguage,
      setAutoDetectedLanguage,
      debounceAction,
      isDetectingLanguage,
      hasErrorAutoDetectingLanguage,
      translatedText,
      hasErrorTranslatingText,
      inTranslatingText,
   } = useLibreTranslate()

   return (
      <$.Container>
         <$.TranslatorContainer>
            <$.InputContainer>
               <SelectLanguage
                  languages={languages}
                  exclude={[selectedLanguages.target]}
                  onChange={newCode => setSelectedLanguages(prevState => ({
                     ...prevState,
                     source: newCode,
                  }))}
                  selectedLanguage={selectedLanguages.source}
               />
               <TextInput
                  value={query}
                  autoFocus
                  placeholder={T.screens.translator.sourceInputPlaceholder}
                  onChangeText={handleQueryChange}
               />
               <$.LoaderContainer>
                  {isDetectingLanguage && (
                     <Loader />
                  )}
               </$.LoaderContainer>
               <$.InputFooter>
                  <Confidence
                     autoDetectedLanguage={autoDetectedLanguage}
                     onClick={() => {
                        setSelectedLanguages(prevState => ({
                           ...prevState,
                           source: autoDetectedLanguage?.language as LanguageCode,
                        }))
                        setAutoDetectedLanguage(undefined)
                        debounceAction(query)
                     }}
                     hasError={hasErrorAutoDetectingLanguage && selectedLanguages.source === LanguageCode.Auto}
                  />
                  <TextCounter
                     counter={query.length}
                     limit={APP_CONFIG.TEXT_INPUT_LIMIT}
                  />
               </$.InputFooter>
            </$.InputContainer>
            <ExchangeLanguage
               hidden={selectedLanguages.source === LanguageCode.Auto}
               onClick={() => setSelectedLanguages(prevState => ({
                  source: prevState.target,
                  target: prevState.source,
               }))}
            />
            <$.InputContainer>
               <SelectLanguage
                  languages={languages}
                  exclude={[selectedLanguages.source, LanguageCode.Auto]}
                  onChange={newCode => setSelectedLanguages(prevState => ({
                     ...prevState,
                     target: newCode,
                  }))}
                  selectedLanguage={selectedLanguages.target}
               />
               <TextInput
                  disabled
                  value={translatedText}
                  hasError={hasErrorTranslatingText}
               />
               <$.LoaderContainer>
                  {inTranslatingText && (
                     <Loader />
                  )}
               </$.LoaderContainer>
            </$.InputContainer>
         </$.TranslatorContainer>
      </$.Container>
   )
}
