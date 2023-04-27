import styled from "styled-components"

export const Confidence = () => {

   return (
      <Container>
         <Percentage>
            48%
         </Percentage>
         <Language>
            (Polish)
         </Language>
      </Container>
   )
}

const Container = styled.div`
   display: flex;
   flex-direction: row;

`

const Percentage = styled.span`
   color: ${({ theme }) => theme.colors.primary}
`

const Language = styled.a`
   cursor: pointer;
   text-decoration: underline;
   margin-left: 5px;
   color: ${({ theme }) => theme.colors.primary}
`
