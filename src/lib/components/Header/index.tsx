import { Images } from 'assets'
import { APP_CONFIG } from 'lib/config'
import { useTranslations } from 'lib/hooks'
import * as $ from './styles'

export default function Header() {
   const T = useTranslations()

   return (
      <$.HeaderContainer>
         <$.LogoContainer>
            <$.Logo src={Images.Logo} />
            <$.Title>
               {T.components.header.title}
            </$.Title>
         </$.LogoContainer>
         <$.LinkContainer>
            <$.Link
              href={APP_CONFIG.GITHUB_URL}
              target="_blank"
            >
               <$.Logo src={Images.Github} />
            </$.Link>
            <$.Link
              href={APP_CONFIG.YOUTUBE_URL}
              target="_blank"
            >
               <$.Logo src={Images.YouTube} />
            </$.Link>
         </$.LinkContainer>
      </$.HeaderContainer>
   )
}
