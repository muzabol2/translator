import { useTranslations, useFetch } from "lib/hooks"
import { HttpMethod } from "lib/types"
import {
   AutoDetectedLanguage,
   Language,
   LanguageCode
} from "lib/models"
import {
   AutoDetectedLanguageRequest,
   TranslateTextRequest,
   TranslateTextResponse
} from "./types"

export const useSupportedLanguages = (
   onSuccess: (languages: Language[]) => void,
) => {
   const T = useTranslations()

   return useFetch<Language[]>({
      url: 'languages',
      method: HttpMethod.GET,
   }, {
      onSuccess: languages => {
         onSuccess([
            {
               code: LanguageCode.Auto,
               name: T.common.autoTranslate,
            },
            ...languages,
         ])
      },
   })
}

export const useAutoDetectedLanguage = (
   onSuccess: (autoDetectedLanguage: AutoDetectedLanguage) => void,
) =>
   useFetch<
      AutoDetectedLanguage[],
      AutoDetectedLanguageRequest
   >({
      url: 'detect',
      method: HttpMethod.POST,
   }, {
      onSuccess: ([autoDetectedLanguage]) =>
         onSuccess(autoDetectedLanguage)
   })

export const useTranslateText = (
   onSuccess: (translatedText: string) => void,
) =>
   useFetch<
      TranslateTextResponse,
      TranslateTextRequest
   >({
      url: 'translate',
      method: HttpMethod.POST,
   }, {
      onSuccess: ({ translatedText }) =>
         onSuccess(translatedText)
   })
