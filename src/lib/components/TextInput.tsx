import { createRef, useEffect } from "react"
import styled from "styled-components"

type InputProps = {
   hasError?: boolean,
}

type TextInputProps = {
   value?: string,
   autoFocus?: boolean,
   disabled?: boolean,
   placeholder?: string,
   hasError?: boolean,
   onChangeText?(text: string): void,
}

export const TextInput = ({
   value,
   autoFocus,
   disabled,
   placeholder,
   hasError,
   onChangeText,
}: TextInputProps) => {
   const inputRef = createRef<HTMLTextAreaElement>()

   useEffect(() => {
      if (!disabled && autoFocus) {
         inputRef.current?.focus()
      }
   }, [])

   return (
      <Input
         value={value}
         ref={inputRef}
         disabled={disabled}
         placeholder={disabled ? '' : placeholder}
         hasError={hasError}
         onChange={e => onChangeText && onChangeText(e.target.value)}
      />
   )
}

const Input = styled.textarea<InputProps>`
   background-color: ${({ theme }) => theme.colors.input};
   color: ${({ theme }) => theme.colors.typography};
   border: ${({ theme, hasError }) => hasError
      ? `1px solid ${theme.colors.error}`
      : 'none'};
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

