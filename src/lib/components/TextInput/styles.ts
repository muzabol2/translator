import styled from 'styled-components'

type InputProps = {
   hasError?: boolean,
}

const Input = styled.textarea<InputProps>`
   background-color: ${({ theme }) => theme.colors.input};
   color: ${({ theme }) => theme.colors.typography};
   border: ${({ theme, hasError }) => (hasError
      ? `1px solid ${theme.colors.error}`
      : 'none')};
   border-radius: 8px;
   height: 300px;
   width: 400px;
   resize: none;
   font-size: 13px;
   padding: 10px 15px;

   @media(max-width: ${({ theme }) => theme.media.width.sm}px) {
      width: 350px;
   }

   @media(max-height: ${({ theme }) => theme.media.height.md}px) {
      height: 200px;
   }

   @media(max-height: ${({ theme }) => theme.media.height.sm}px) {
      height: 150px;
   }
`

export default Input
