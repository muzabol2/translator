import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import MockThemeProvider from 'lib/test-utils/MockThemeProvider'
import TextCounter from 'lib/components/TextCounter'

describe('TextCounter', () => {
  it('Renders component', () => {
    const counter = 5
    const limit = 10

    render(
      <MockThemeProvider>
        <TextCounter counter={counter} limit={limit} />
      </MockThemeProvider>,
    )

    expect(screen.getByText(`${counter}`, { exact: false })).toBeInTheDocument()
    expect(screen.getByText(`${limit}`, { exact: false })).toBeInTheDocument()
  })
})
