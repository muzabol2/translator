import { Language, LanguageCode } from 'lib/models/Language'
import { useMemo } from 'react'
import Select from './styles'

type SelectLanguageProps = {
  languages: Language[],
  selectedLanguage: LanguageCode,
  exclude: LanguageCode[],
  onChange(newLanguage: LanguageCode): void,
}

export default function SelectLanguage({
  languages,
  selectedLanguage,
  exclude,
  onChange,
}: SelectLanguageProps) {
  const filteredLanguages = useMemo(() => languages
    .filter((language) => !exclude.includes(language.code))
    .map((language) => ({
      key: language.code,
      label: language.name,
    })), [languages, exclude])

  return (
    <Select
      value={selectedLanguage}
      onChange={(e) => onChange(e.target.value as LanguageCode)}
    >
      {filteredLanguages.map((language) => (
        <option key={language.key} value={language.key}>
          {language.label}
        </option>
      ))}
    </Select>
  )
}
