import styled from 'styled-components'

export const MessageContainer = styled.div``

export const Text = styled.div`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.typography};  
`

export const Button = styled.div`
  cursor: pointer;
  padding: 10px 5px;
  text-align: center;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
`
