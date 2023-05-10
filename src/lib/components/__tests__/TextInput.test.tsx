import { render, screen } from '@testing-library/react'
import MockThemeProvider from 'lib/test-utils/MockThemeProvider'
import TextInput from '../TextInput'

// Tests for TextInput component
describe('TextInput', () => {
   it('Renders component', () => {
      const value = 'Test Label'
      const placeholder = 'Test Placeholder'

      render(
         <MockThemeProvider>
            <TextInput
              value={value}
              placeholder={placeholder}
            />
         </MockThemeProvider>,
      )

      expect(screen.getByText(`${value}`, { exact: false })).toBeInTheDocument()
      expect(screen.getByPlaceholderText(`${placeholder}`, { exact: false })).toBeInTheDocument()
   })
})
