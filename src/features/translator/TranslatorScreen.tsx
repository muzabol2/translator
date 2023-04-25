import styled from "styled-components"
import { useTranslations } from "lib/hooks/useTranslations"

export const TranslatorScreen: React.FC = () => {
   const T = useTranslations()

   return (
      <Container>
        {T.appName}
      </Container>
   )
}

const Container = styled.div`
   color: ${({ theme }) => theme.colors.typography};
`
