import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import styled from "styled-components"
import {
   Confidence,
   ExchangeLanguage,
   Loader,
   SelectLanguage,
   TextCounter,
   TextInput
} from "lib/components"
import { AutoDetectedLanguage, Language, LanguageCode } from "lib/models"
import { useTranslations } from "lib/hooks";
import { APP_CONFIG } from "lib/config";
import { SelectedLanguages } from "./types";
import { useAutoDetectedLanguage, useTranslateText } from "./actions";

type TranslatorScreenProps = {
   languages: Language[],
}

export const TranslatorScreen = ({
   languages
}: TranslatorScreenProps
) => {
   const T = useTranslations()
   const [translatedText, setTranslatedText] = useState<string>('')
   const [query, setQuery] = useState<string>('')
   const [autoDetectedLanguage, setAutoDetectedLanguage] = useState<AutoDetectedLanguage>()
   const [selectedLanguages, setSelectedLanguages] = useState<SelectedLanguages>({
      source: LanguageCode.Auto,
      target: LanguageCode.English,
   })
   const {
      fetch: autoDetectLanguage,
      isLoading: isDetectingLanguage,
      hasError: hasErrorAutoDetectingLanguage,
   } = useAutoDetectedLanguage(setAutoDetectedLanguage)
   const {
      fetch: translateText,
      isLoading: inTranslatingText,
      hasError: hasErrorTranslatingText,
   } = useTranslateText(setTranslatedText)

   const handleQueryChange = (newQuery: string) => {
      if (newQuery.length > APP_CONFIG.TEXT_INPUT_LIMIT) {
         return
      }

      setQuery(newQuery)
      debounceAction(newQuery)
   }

   const debounceAction = useDebouncedCallback(
      debouncedQuery => {
         if (debouncedQuery.length < 5) {
            return
         }

         selectedLanguages.source === LanguageCode.Auto
            ? autoDetectLanguage(debouncedQuery)
            : translateText(debouncedQuery, selectedLanguages)
      },
      1000
   )

   return (
      <Container>
         <TranslatorContainer>
            <InputContainer>
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
               <LoaderContainer>
                  {isDetectingLanguage && (
                     <Loader />
                  )}
               </LoaderContainer>
               <InputFooter>
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
               </InputFooter>
            </InputContainer>
            <ExchangeLanguage
               hidden={selectedLanguages.source === LanguageCode.Auto}
               onClick={() => setSelectedLanguages(prevState => ({
                  source: prevState.target,
                  target: prevState.source,
               }))}
            />
            <InputContainer>
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
               <LoaderContainer>
                  {inTranslatingText && (
                     <Loader />
                  )}
               </LoaderContainer>
            </InputContainer>
         </TranslatorContainer>
      </Container>
   )
}

const Container = styled.div`
   display: flex;
   flex-direction: column;
   flex: 1;
   color: ${({ theme }) => theme.colors.typography};
`

const TranslatorContainer = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   margin-top: 50px;
`

const InputContainer = styled.div`
   display: flex;
   flex-direction: column;
   padding: 0 5px;
`

const LoaderContainer = styled.div`
   padding: 5px 10px;
   height: 2px;
`

const InputFooter = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
`
