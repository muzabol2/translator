import { Images } from "assets"
import styled from "styled-components"

type ExchangeLanguageProps = {
   hidden: boolean,
   onClick(): void,
}

export const ExchangeLanguage = ({
   hidden,
   onClick,
}: ExchangeLanguageProps) => {

   return (
      <ExchangeContainer>
         {!hidden && (<Exchange
            src={Images.Exchange}
            onClick={onClick}
         />)
         }
      </ExchangeContainer>
   )
}

const ExchangeContainer = styled.div`
   width: 25px;
   height: 25px;
`
const Exchange = styled.img`
   cursor: pointer;
   width: 25px;
   height: 25px;
`
