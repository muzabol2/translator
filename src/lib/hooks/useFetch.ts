import { useState } from 'react'
import { HttpMethod, OnError, OnSuccess } from 'lib/types'
import { APP_CONFIG } from 'lib/config'

type FetchProps = {
  url: string,
  method: HttpMethod,
}

type FetchActions<Response> = {
  onSuccess: OnSuccess<Response>,
  onError?: OnError,
}

const useFetch = <Response, Request = Record<string, any>>(
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
        },
      }

      fetch(`${APP_CONFIG.API_URL}/${config.url}`, fetchConfig)
        .then((response) => {
          if (response.ok) {
            return response
          }
          throw new Error('Request failed')
        })
        .then((response) => response.json())
        .then(actions.onSuccess)
        .catch(() => {
          setHasError(true)
          if (actions.onError) {
            actions.onError()
          }
        })
        .finally(() => {
          setIsLoading(false)
        })
    },
  }
}

export default useFetch
