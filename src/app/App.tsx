import styled, { ThemeProvider } from "styled-components"
import { theme } from 'lib/styles'
import { TranslatorScreen } from "features/translator/TranslatorScreen"

export const App = () => (
   <ThemeProvider theme={theme}>
      <AppContainer>
         <TranslatorScreen />
      </AppContainer>
   </ThemeProvider>
)

const AppContainer = styled.div`
   width: 100%;
   height: 100vh;
   background-color: ${({ theme }) => theme.colors.background};
`
