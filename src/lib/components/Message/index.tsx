import { useTranslations } from 'lib/hooks'
import * as $ from './styles'

type MessageProps = {
   message: string,
   withButton?: boolean,
   onClick?(): void,
}

export default function Message({
   message,
   withButton,
   onClick,
}: MessageProps) {
   const T = useTranslations()

   return (
      <$.MessageContainer>
         <$.Text>
            {message}
         </$.Text>
         {withButton && (
            <$.Button onClick={onClick}>
               {T.components.message.tryAgain}
            </$.Button>
         )}
      </$.MessageContainer>
   )
}

Message.defaultProps = {
   withButton: false,
   onClick: undefined,
}
