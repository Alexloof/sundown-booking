import React from 'react'
import globalStyle from './styles/globalStyle'
import { BrowserRouter } from 'react-router-dom'

import styled, { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import Routes from './Routes'
import Navigation from './components/Navigation'

const GlobalStyle = globalStyle()

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Container>
          <Navigation />
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
`
