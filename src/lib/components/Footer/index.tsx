import { APP_CONFIG } from 'lib/config'
import { useTranslations } from 'lib/hooks'
import * as $ from './styles'

function Footer() {
  const T = useTranslations()
  const year = new Date().getFullYear()

  return (
    <$.FooterContainer>
      <$.PlaceholderContainer>
        {`&copy; ${year} ${T.common.companyName}`}
      </$.PlaceholderContainer>
      <$.LinkContainer>
        <$.Link
          href={APP_CONFIG.FLAT_ICON_URL}
          target="_blank"
        >
          {T.components.footer.flatIcon}
        </$.Link>
        <$.Link
          href={APP_CONFIG.LIBRE_TRANSLATE_URL}
          target="_blank"
        >
          {T.components.footer.libreTranslate}
        </$.Link>
      </$.LinkContainer>
    </$.FooterContainer>
  )
}

export default Footer
