import styled from 'styled-components'

export const ExchangeContainer = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  flex-direction: row;

  @media(min-width: ${({ theme }) => theme.media.width.md}px) {
    width: 100px;
    justify-content: center;
  }
`
export const Exchange = styled.img`
  cursor: pointer;
  width: 25px;
  height: 25px;
`
