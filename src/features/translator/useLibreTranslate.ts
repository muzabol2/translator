import { useState } from "react"
import { useDebouncedCallback } from "use-debounce"
import { AutoDetectedLanguage, LanguageCode } from "lib/models"
import { APP_CONFIG } from "lib/config"
import { SelectedLanguages } from "./types"
import { useAutoDetectedLanguage, useTranslateText } from "./actions"

export const useLibreTranslate = () => {
   const [translatedText, setTranslatedText] = useState<string>('')
   const [query, setQuery] = useState<string>('')
   const [autoDetectedLanguage, setAutoDetectedLanguage] = useState<AutoDetectedLanguage>()
   const [selectedLanguages, setSelectedLanguages] = useState<SelectedLanguages>({
      source: LanguageCode.Auto,
      target: LanguageCode.Chinese,
   })
   const {
      fetch: autoDetectLanguage,
      isLoading: isDetectingLanguage,
      hasError: hasErrorAutoDetectingLanguage,
   } = useAutoDetectedLanguage(setAutoDetectedLanguage)
   const {
      fetch: translateText,
      isLoading: inTranslatingText,
      hasError: hasErrorTranslatingText,
   } = useTranslateText(setTranslatedText)

   const handleQueryChange = (newQuery: string) => {
      if (newQuery.length > APP_CONFIG.TEXT_INPUT_LIMIT) {
         return
      }

      setQuery(newQuery)
      debounceAction(newQuery)
   }

   const debounceAction = useDebouncedCallback(
      debouncedQuery => {
         if (debouncedQuery.length < 5) {
            return
         }

         selectedLanguages.source === LanguageCode.Auto
            ? autoDetectLanguage({
               q: debouncedQuery,
            })
            : translateText({
               q: debouncedQuery,
               source: selectedLanguages.source,
               target: selectedLanguages.target,
               format: 'text',
            })
      },
      1000
   )

   return {
      selectedLanguages,
      setSelectedLanguages,
      query,
      handleQueryChange,
      autoDetectedLanguage,
      setAutoDetectedLanguage,
      debounceAction,
      isDetectingLanguage,
      hasErrorAutoDetectingLanguage,
      translatedText,
      hasErrorTranslatingText,
      inTranslatingText,
   }
}
