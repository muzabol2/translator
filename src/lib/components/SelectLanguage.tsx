import { Language, LanguageCode } from "lib/models/Language"
import styled from "styled-components"
import { useMemo } from "react"

type SelectLanguageProps = {
   languages: Language[],
   selectedLanguage: LanguageCode,
   exclude: LanguageCode[],
   onChange(newLanguage: LanguageCode): void,
}

export const SelectLanguage = ({
   languages,
   selectedLanguage,
   exclude,
   onChange,
}: SelectLanguageProps) => {
   const filteredLanguages = useMemo(() => languages
      .filter(language => !exclude.includes(language.code))
      .map(language => ({
         key: language.code,
         label: language.name
      })), [languages, exclude]
   )

   return (
      <Select
         value={selectedLanguage}
         onChange={e => onChange(e.target.value as LanguageCode)
         }
      >
         {filteredLanguages.map(language =>
            <Option
               key={language.key}
               value={language.key}
            >
               {language.label}
            </Option>
         )}
      </Select>
   )
}

const Select = styled.select`
   max-width: 140px;
   margin-bottom: 10px;
   border: 0;
   font-size: 14px;
   font-weight: bold;
   background-color: ${({ theme }) => theme.colors.foreground};
   color: ${({ theme }) => theme.colors.typography};
   height: 24px;
   padding: 0 10px;
`

const Option = styled.option``
