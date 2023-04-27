import styled from "styled-components"

export const TextInput = () => {
   return (
      <Input placeholder="type here" />
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

