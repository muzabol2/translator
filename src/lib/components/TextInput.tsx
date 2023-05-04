import { createRef, useEffect } from "react"
import styled from "styled-components"

type TextInputProps = {
   value?: string,
   autoFocus?: boolean,
   disabled?: boolean,
   placeholder?: string,
   onChangeText?(text: string): void,
}

export const TextInput = ({
   value,
   autoFocus,
   disabled,
   placeholder,
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
         onChange={e => onChangeText && onChangeText(e.target.value)}
      />
   )
}

const Input = styled.textarea`
   background-color: ${({ theme }) => theme.colors.input};
   color: ${({ theme }) => theme.colors.typography};
   border: none;
   border-radius: 8px;
   height: 300px;
   width: 400px;
   resize: none;
   font-size: 13px;
   padding: 10px 15px
`

