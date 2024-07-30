import ContactsList from "../ContactsList";
import { Container } from "./styles";
import { GlobalStyles } from "../../assets/styles/GlobalStyle";
import { Header } from "../Header";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../../assets/styles/themes/default";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Container>
          <Header />
          <ContactsList />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
