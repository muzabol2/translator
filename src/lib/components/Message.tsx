import { useTranslations } from "lib/hooks"
import styled from "styled-components"

type MessageProps = {
   message: string,
   withButton?: boolean,
   onClick?(): void,
}

export const Message = ({
   message,
   withButton,
   onClick,
}: MessageProps) => {
   const T = useTranslations()

   return (
      <MessageContainer>
         <Text>
            {message}
         </Text>
         {withButton && (
            <Button onClick={onClick}>
               {T.components.message.tryAgain}
            </Button>
         )}
      </MessageContainer>
   )
}

const MessageContainer = styled.div`
   
`

const Text = styled.div`
   margin-bottom: 20px;
   color: ${({ theme }) => theme.colors.typography};  
`

const Button = styled.div`
    cursor: pointer;
    padding: 10px 5px;
    text-align: center;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.primary}
`
