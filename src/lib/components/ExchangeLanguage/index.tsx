import { Images } from 'assets'
import * as $ from './styles'

type ExchangeLanguageProps = {
  hidden: boolean,
  onClick(): void,
}

function ExchangeLanguage({
  hidden,
  onClick,
}: ExchangeLanguageProps) {
  return (
    <$.ExchangeContainer>
      {!hidden && (
        <$.Exchange
          alt="Exchange Language"
          src={Images.Exchange}
          onClick={onClick}
        />
      )}
    </$.ExchangeContainer>
  )
}

export default ExchangeLanguage
