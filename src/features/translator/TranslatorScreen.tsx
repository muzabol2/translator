import styled from "styled-components"
import {
   Confidence,
   ExchangeLanguage,
   Loader,
   Message,
   SelectLanguage,
   TextCounter,
   TextInput
} from "lib/components"
import { useSupportedLanguages, useTranslations } from "lib/hooks"
import { useEffect, useState } from "react"
import { Language } from "lib/models/index."

export const TranslatorScreen = () => {
   const T = useTranslations()
   const [languages, setLanguages] = useState<Language[]>([])
   const {
      isLoading,
      hasError,
      fetch: getSupportedLanguages
   } = useSupportedLanguages(
      setLanguages
   )

   useEffect(() => {
      getSupportedLanguages()
   }, [])

   if (isLoading) {
      return (
         <FetchLoaderContainer>
            <Loader>
               {T.screen.translator.loading}
            </Loader>
         </FetchLoaderContainer>
      )
   }

   if (hasError) {
      return (
         <CenterContainer>
            <Message
               message={T.screen.translator.error}
               withButton
               onClick={() => getSupportedLanguages()}
            />
         </CenterContainer>
      )
   }

   if (languages?.length === 0) {
      return (
         <CenterContainer>
            <Message
               message={T.screen.translator.empty}
            />
         </CenterContainer>
      )
   }

   return (
      <Container>
         <TranslatorContainer>
            <InputContainer>
               <SelectLanguage />
               <TextInput />
               <LoaderContainer>
                  <Loader />
               </LoaderContainer>
               <InputFooter>
                  <Confidence />
                  <TextCounter />
               </InputFooter>
            </InputContainer>
            <ExchangeLanguage />
            <InputContainer>
               <SelectLanguage />
               <TextInput />
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

const FetchLoaderContainer = styled.div`
   width: 50%;
   display: flex;
   align-self: center;
`

const InputFooter = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
`

const CenterContainer = styled.div`
   display: flex;
   justify-content: center;
`
