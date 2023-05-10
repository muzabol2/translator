import * as $ from './styles'

type Props = {
  children?: React.ReactNode,
}

export default function Loader({ children }: Props) {
  return (
    <$.LoaderContainer>
      <$.ActivityIndicator />
      {children}
    </$.LoaderContainer>
  )
}

Loader.defaultProps = {
  children: null,
}
