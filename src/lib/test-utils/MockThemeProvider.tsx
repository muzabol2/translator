import React from 'react'
import { theme } from 'lib/styles'
import { ThemeProvider } from 'styled-components'

type MockThemeProviderProps = {
   children: React.ReactNode
}

export default function MockThemeProvider({
   children,
}: MockThemeProviderProps) {
   return (
      <ThemeProvider theme={theme}>
         {children}
      </ThemeProvider>
   )
}
