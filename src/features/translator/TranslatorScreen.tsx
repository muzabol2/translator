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

type TranslatorScreenProps = {
   languages: Language[],
}

export const TranslatorScreen = ({
   languages
}: TranslatorScreenProps
) => {

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

const InputFooter = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
`
