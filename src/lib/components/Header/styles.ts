import styled from 'styled-components'

export const HeaderContainer = styled.div`
  height: 50px;
  background-color: ${({ theme }) => theme.colors.foreground};
  padding: 0 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Logo = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 10px;
`

export const Title = styled.h1`
  display: inline;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.typography};
`

export const LinkContainer = styled.div``

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.typography};
  text-decoration: underline;
  cursor: pointer;
  padding: 0 5px;
`
