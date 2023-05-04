import { APP_CONFIG } from "lib/config"
import { useTranslations } from "lib/hooks"
import { Language, LanguageCode } from "lib/models/Language"
import { useState } from "react"

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
