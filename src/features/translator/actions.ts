import { APP_CONFIG } from "lib/config"
import { useTranslations } from "lib/hooks"
import { AutoDetectedLanguage } from "lib/models"
import { Language, LanguageCode } from "lib/models/Language"
import { useState } from "react"
import { SelectedLanguages } from "./types"

export const useSupportedLanguages = (
   onSuccess: (languages: Language[]) => void
) => {
   const T = useTranslations()
   const [isLoading, setIsLoading] = useState<boolean>(false)
   const [hasError, setHasError] = useState<boolean>(false)

   return {
      isLoading,
      hasError,
      fetch: () => {
         setIsLoading(true)
         setHasError(false)

         fetch(`${APP_CONFIG.API_URL}/languages`)
            .then(response => {
               if (response.ok) {
                  return response
               }
               throw response
            })
            .then(response => response.json())
            .then(languages => {
               onSuccess([
                  {
                     code: LanguageCode.Auto,
                     name: T.common.autoTranslate,
                  },
                  ...languages,
               ])
            })
            .catch(() => {
               setHasError(true)
            })
            .finally(() => {
               setIsLoading(false)
            })
      }
   }
}

export const useAutoDetectedLanguage = (
   onSuccess: (autoDetectedLanguage: AutoDetectedLanguage) => void
) => {
   const [isLoading, setIsLoading] = useState<boolean>(false)
   const [hasError, setHasError] = useState<boolean>(false)

   return {
      isLoading,
      hasError,
      fetch: (query: string) => {
         setIsLoading(true)
         setHasError(false)

         fetch(`${APP_CONFIG.API_URL}/detect`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               q: query,
            })
         })
            .then(response => {
               if (response.ok) {
                  return response
               }
               throw response
            })
            .then(response => response.json())
            .then(([autoDetectedLanguage]) => onSuccess(autoDetectedLanguage))
            .catch(() => {
               setHasError(true)
            })
            .finally(() => {
               setIsLoading(false)
            })
      }
   }
}

export const useTranslateText = (
   onSuccess: (translatedText: string) => void
) => {
   const [isLoading, setIsLoading] = useState<boolean>(false)
   const [hasError, setHasError] = useState<boolean>(false)

   return {
      isLoading,
      hasError,
      fetch: (query: string, selectedLanguage: SelectedLanguages) => {
         setIsLoading(true)
         setHasError(false)

         fetch(`${APP_CONFIG.API_URL}/translate`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               q: query,
               source: selectedLanguage.source,
               target: selectedLanguage.target,
               format: 'text',
            })
         })
            .then(response => {
               if (response.ok) {
                  return response
               }
               throw response
            })
            .then(response => response.json())
            .then(({ translatedText }) => onSuccess(translatedText))
            .catch(() => {
               setHasError(true)
            })
            .finally(() => {
               setIsLoading(false)
            })
      }
   }
}
