import styled from 'styled-components'

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const FetchLoaderContainer = styled.div`
  width: 50%;
  display: flex;
  align-self: center;
`

export const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
`
