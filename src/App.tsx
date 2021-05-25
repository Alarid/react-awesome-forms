import React from 'react'
import { ThemeProvider } from 'styled-components'

import Home from 'sections/Home'
import theme from 'styles/theme'
import GlobalStyle from 'styles/globalStyle'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  )
}

export default App
