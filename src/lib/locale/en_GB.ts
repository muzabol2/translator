import { Dictionary } from 'lib/types'

// eslint-disable-next-line @typescript-eslint/naming-convention
const en_GB: Dictionary = {
   common: {
      autoTranslate: 'Auto translate',
      companyName: 'Muzabol',
   },
   components: {
      app: {
         loading: 'Fetching supported languages...',
         error: 'Something went wrong...',
         empty: 'No supported language',
      },
      header: {
         title: 'translator',
      },
      footer: {
         flatIcon: 'flaticon',
         libreTranslate: 'LibreTranslate',
      },
      message: {
         tryAgain: 'Try again',
      },
      confidence: {
         error: "Couldn't detect the language",
      },
   },
   screens: {
      translator: {
         sourceInputPlaceholder: 'Enter text to be translated...',
      },
   },
}

export default en_GB
