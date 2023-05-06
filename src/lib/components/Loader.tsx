import styled from "styled-components"

type Props = {
   children?: React.ReactNode
}

export const Loader = ({ children }: Props) => (
   <LoaderContainer>
      <ActivityIndicator />
      {children}
   </LoaderContainer>
)

const ActivityIndicator = styled.div`
   width: 100%;
   height: 2px;
   background-color: ${({ theme }) => theme.colors.primary};
   border-radius: 4px;
   animation: loading 1s linear infinite alternate;

   @keyframes loading2 {
      0% {
         width: 0;
      }
      100% {
         width: 100%;
      }
   }
`

const LoaderContainer = styled.div`
   width: 100%;
   height: 2px;
   display: flex;
   flex-direction: column;;
   justify-content: center;
   gap: 20px;
   text-align: center;
   color: ${({ theme }) => theme.colors.typography};
`
