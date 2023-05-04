import { createRef, useEffect } from "react"
import styled from "styled-components"

type TextInputProps = {
   autoFocus?: boolean,
   disabled?: boolean,
   placeholder?: string,
}

export const TextInput = ({
   autoFocus,
   disabled,
   placeholder
}: TextInputProps) => {
   const inputRef = createRef<HTMLTextAreaElement>()

   useEffect(() => {
      if (!disabled && autoFocus) {
         inputRef.current?.focus()
      }
   }, [])

   return (
      <Input
         ref={inputRef}
         disabled={disabled}
         placeholder={disabled ? '' : placeholder}
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

