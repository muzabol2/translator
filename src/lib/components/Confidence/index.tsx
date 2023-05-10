import { useCallback } from 'react'
import { useTranslations } from 'lib/hooks'
import { AutoDetectedLanguage, LanguageCode } from 'lib/models'
import * as $ from './styles'

type ConfidenceProps = {
  autoDetectedLanguage?: AutoDetectedLanguage,
  onClick(): void,
  hasError: boolean,
}

export default function Confidence({
  autoDetectedLanguage,
  onClick,
  hasError,
}: ConfidenceProps) {
  const T = useTranslations()
  const { confidence, language } = autoDetectedLanguage ?? { confidence: 0, language: '' }

  const getDetectedLanguage = useCallback(() => {
    if (!language) {
      return undefined
    }

    const [detectedLanguage] = Object
      .entries(LanguageCode)
      .find(([, languageCode]) => language === languageCode) || []

    return detectedLanguage
      ? `(${detectedLanguage})`
      : undefined
  }, [language])

  return (
    <$.Container>
      <$.Percentage>
        {confidence !== 0 && `${confidence}%`}
      </$.Percentage>
      <$.Language
        onClick={() => !hasError && onClick()}
        disabled={hasError}
      >
        {hasError && T.components.confidence.error}
        {language && getDetectedLanguage()}
      </$.Language>
    </$.Container>
  )
}

Confidence.defaultProps = {
  autoDetectedLanguage: { confidence: 0, language: '' },
}
