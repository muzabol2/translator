import styled from "styled-components"

export const TranslatorScreen: React.FC = () => {

   return (
      <Container>
         tempName
      </Container>
   )
}

const Container = styled.div`
   display: flex;
   flex-direction: column;
   flex: 1;
   color: ${({ theme }) => theme.colors.typography};
`
