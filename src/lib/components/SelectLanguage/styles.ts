import styled from 'styled-components'

const Select = styled.select`
  max-width: 140px;
  margin-bottom: 10px;
  border: 0;
  font-size: 14px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.foreground};
  color: ${({ theme }) => theme.colors.typography};
  height: 24px;
  padding: 0 10px;
  border-radius: 8px;
`

export default Select
