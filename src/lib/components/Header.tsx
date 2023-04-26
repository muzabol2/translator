import { Images } from "assets"
import { useTranslations } from "lib/hooks"
import styled from "styled-components"

export const Header = () => {
   const T = useTranslations()

   return (
      <HeaderContainer>
         <LogoContainer>
            <Logo src={Images.Logo} />
            <Title>
               {T.appName}
            </Title>
         </LogoContainer>
         <LinkContainer>
            <Link>
               Github
            </Link>
            <Link>
               XXX
            </Link>
         </LinkContainer>
      </HeaderContainer>
   )
}

const HeaderContainer = styled.div`
   height: 60px;
   background-color: ${({ theme }) => theme.colors.foreground};
   padding: 0 15px;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between
`

const LogoContainer = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
`

const Logo = styled.img`
   width: 36px;
   height: 36px;
   margin-right: 10px;
`

const Title = styled.h1`
   display: inline;
   font-size: 30px;
   color: ${({ theme }) => theme.colors.typography};
`

const LinkContainer = styled.div`

`

const Link = styled.a`


`
