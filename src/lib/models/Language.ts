export type Language = {
   code: LanguageCode,
   name: string,
   targets?: [string],
}

export enum LanguageCode {
   Auto = 'auto',
   English = 'en',
   Chinese = 'zh',
   Polish = 'pl',
   German = 'de',
   Spanish = 'es',
}
