import styled from 'styled-components'

export const FooterContainer = styled.div`
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  background-color: ${({ theme }) => theme.colors.foreground};
`

export const PlaceholderContainer = styled.div`
  color: ${({ theme }) => theme.colors.typography};
`

export const LinkContainer = styled.div``

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.typography};
  text-decoration: underline;
  cursor: pointer;
  padding: 0 10px;
`
