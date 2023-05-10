import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'lib/styles'
import { TranslatorScreen, translatorActions } from 'features/translator'
import { Language } from 'lib/models/Language'
import { useTranslations } from 'lib/hooks'
import Loader from 'lib/components/Loader'
import Message from 'lib/components/Message'
import Header from 'lib/components/Header'
import Footer from 'lib/components/Footer'
import * as $ from './styles'

function App() {
  const T = useTranslations()
  const [languages, setLanguages] = useState<Language[]>([])
  const {
    isLoading,
    hasError,
    fetch: getSupportedLanguages,
  } = translatorActions.useSupportedLanguages(
    setLanguages,
  )

  useEffect(() => {
    getSupportedLanguages()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getLayout = () => {
    if (isLoading) {
      return (
        <$.FetchLoaderContainer>
          <Loader>
            {T.components.app.loading}
          </Loader>
        </$.FetchLoaderContainer>
      )
    }

    if (hasError) {
      return (
        <$.CenterContainer>
          <Message
            message={T.components.app.error}
            withButton
            onClick={() => getSupportedLanguages()}
          />
        </$.CenterContainer>
      )
    }

    if (languages?.length === 0) {
      return (
        <$.CenterContainer>
          <Message
            message={T.components.app.empty}
          />
        </$.CenterContainer>
      )
    }

    return (
      <TranslatorScreen languages={languages} />
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <$.AppContainer>
        <Header />
        {getLayout()}
        <Footer />
      </$.AppContainer>
    </ThemeProvider>
  )
}

export default App
