import styled from 'styled-components'

type LanguageProps = {
   disabled: boolean,
}

export const Container = styled.div`
   display: flex;
   flex-direction: row;
`

export const Percentage = styled.span`
   color: ${({ theme }) => theme.colors.primary};
`

export const Language = styled.a<LanguageProps>`
   cursor: ${({ disabled }) => (disabled ? undefined : 'pointer')};
   text-decoration: ${({ disabled }) => (disabled ? undefined : 'underline')};
   margin-left: 5px;
   color: ${({ theme, disabled }) => (disabled ? theme.colors.error : theme.colors.primary)};
`
