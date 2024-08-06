import { Container } from "./styles";
import { GlobalStyles } from "../../assets/styles/GlobalStyle";
import { Header } from "../Header";
import Routes from "../../routes";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../../assets/styles/themes/default";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Container>
          <Header />
          <Routes />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
