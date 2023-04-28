export type Dictionary = {
   companyName: string,
   components: {
      header: {
         title: string,
      },
      footer: {
         flatIcon: string,
         libreTranslate: string,
      },
      message: {
         tryAgain: string,
      },
   },
   screen: {
      translator: {
         loading: string,
         error: string,
         empty: string,
      },
   },
}
