import React from 'react'
import globalStyle from './styles/globalStyle'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import stores from './stores'
import styled, { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import Routes from './Routes'
import Navigation from './components/Navigation'

const GlobalStyle = globalStyle()

const App: React.FC = () => {
  return (
    <Provider {...stores}>
      <BrowserRouter>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Container>
            <Navigation />
            <Routes />
          </Container>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default App

const Container = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  height: 100vh;
  padding: 0px 20px;
`
