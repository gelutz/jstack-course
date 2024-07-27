import { Container } from './styles'
import { GlobalStyles } from "../../assets/styles/GlobalStyle"
import { ThemeProvider } from 'styled-components'
import defaultTheme from "../../assets/styles/themes/default"

function App() {

  return (
    <>
      <ThemeProvider theme={defaultTheme}> 
        <GlobalStyles />
        <Container><h1>Hello World</h1>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
