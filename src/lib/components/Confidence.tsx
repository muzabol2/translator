import { useTranslations } from "lib/hooks"
import { AutoDetectedLanguage } from "lib/models"
import styled from "styled-components"

type LanguageProps = {
   disabled: boolean,
}

type ConfidenceProps = {
   autoDetectedLanguage?: AutoDetectedLanguage,
   onClick(): void,
   hasError: boolean,
}

export const Confidence = ({
   autoDetectedLanguage,
   onClick,
   hasError,
}: ConfidenceProps) => {
   const T = useTranslations()
   const { confidence, language } = autoDetectedLanguage ?? { confidence: 0, language: '' }

   return (
      <Container>
         <Percentage>
            {confidence !== 0 && `${confidence}`}
         </Percentage>
         <Language
            onClick={() => !hasError && onClick()}
            disabled={hasError}
         >
            {hasError && T.components.confidence.error}
            {language && `(${language})`}
         </Language>
      </Container>
   )
}

const Container = styled.div`
   display: flex;
   flex-direction: row;
`

const Percentage = styled.span`
   color: ${({ theme }) => theme.colors.primary};
`

const Language = styled.a<LanguageProps>`
   cursor: ${({ disabled }) => disabled ? undefined : 'pointer'};
   text-decoration: ${({ disabled }) => disabled ? undefined : 'underline'};
   margin-left: 5px;
   color: ${({ theme, disabled }) => disabled ? theme.colors.error : theme.colors.primary};
`
