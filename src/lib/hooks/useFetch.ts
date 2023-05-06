import { useState } from "react"
import { HttpMethod, onError, onSuccess } from "lib/types"
import { APP_CONFIG } from "lib/config"

type FetchProps = {
   url: string,
   method: HttpMethod,
}

type FetchActions<Response> = {
   onSuccess: onSuccess<Response>,
   onError?: onError,
}

export const useFetch = <Response, Request = {}>(
   config: FetchProps,
   actions: FetchActions<Response>,
) => {
   const [isLoading, setIsLoading] = useState<boolean>(false)
   const [hasError, setHasError] = useState<boolean>(false)

   return {
      isLoading,
      hasError,
      fetch: (params?: Request) => {
         setIsLoading(true)
         setHasError(false)

         const fetchConfig = {
            ...config.method === HttpMethod.POST && {
               method: config.method,
               headers: {
                  'Content-Type': 'application/json',
               },
               body: JSON.stringify({
                  ...params,
               }),
            }
         }

         fetch(`${APP_CONFIG.API_URL}/${config.url}`, fetchConfig)
            .then(response => {
               if (response.ok) {
                  return response
               }
               throw response
            })
            .then(response => response.json())
            .then(actions.onSuccess)
            .catch(() => {
               setHasError(true)
               actions.onError && actions.onError()
            })
            .finally(() => {
               setIsLoading(false)
            })
      }
   }
}
