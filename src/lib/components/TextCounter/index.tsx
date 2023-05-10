import styled from 'styled-components'

type TextCounterProps = {
  counter: number,
  limit: number,
}

export const Counter = styled.div`
   color: ${({ theme }) => theme.colors.typography};
`

export default function TextCounter({
  counter,
  limit,
}: TextCounterProps) {
  return (
    <Counter>
      {counter}
      /
      {limit}
    </Counter>
  )
}
