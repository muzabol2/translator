import { useState } from "react";
import styled from "styled-components"
import {
   Confidence,
   ExchangeLanguage,
   Loader,
   SelectLanguage,
   TextCounter,
   TextInput
} from "lib/components"
import { Language, LanguageCode } from "lib/models"
import { SelectedLanguages } from "./types";
import { useTranslations } from "lib/hooks";
import { APP_CONFIG } from "lib/config";

type TranslatorScreenProps = {
   languages: Language[],
}

export const TranslatorScreen = ({
   languages
}: TranslatorScreenProps
) => {
   const T = useTranslations()
   const [query, setQuery] = useState<string>('')
   const [selectedLanguages, setSelectedLanguages] = useState<SelectedLanguages>({
      source: LanguageCode.Auto,
      target: LanguageCode.English,
   })

   const handleQueryChange = (newQuery: string) => {
      if (newQuery.length <= APP_CONFIG.TEXT_INPUT_LIMIT) {
         setQuery(newQuery)
      }
   }

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
                  <Loader />
               </LoaderContainer>
               <InputFooter>
                  <Confidence />
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
               />
               <LoaderContainer>
                  <Loader />
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
`

const InputFooter = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
`
