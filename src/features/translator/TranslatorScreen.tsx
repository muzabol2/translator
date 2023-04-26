import styled from "styled-components"
import { useTranslations } from "lib/hooks/useTranslations"

export const TranslatorScreen: React.FC = () => {
   const T = useTranslations()

   return (
      <Container>
        {T.appName}
        <p>test</p>
      </Container>
   )
}

const Container = styled.div`
   color: ${({ theme }) => theme.colors.typography};
`
