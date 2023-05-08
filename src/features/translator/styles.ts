import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   flex: 1;
   color: ${({ theme }) => theme.colors.typography};
`

export const TranslatorContainer = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   margin-top: 50px;

   @media(max-width: ${({ theme }) => theme.media.width.md}px) {
      flex-direction: column;
      align-items: center;
   }
`

export const InputContainer = styled.div`
   display: flex;
   flex-direction: column;
   padding: 0 5px;
`

export const LoaderContainer = styled.div`
   padding: 5px 10px;
   height: 2px;
`

export const InputFooter = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
`
