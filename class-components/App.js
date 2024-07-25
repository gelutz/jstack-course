import React from "react";

class App extends React.Component {
  shouldComponentUpdate() {
    // retorna true se o componente deve ser atualizado
    // ou false se não deve
    return true;
  }

  componentDidUpdate() {
    // é chamado quando o componente é atualizado
  }

  componentDidCatch() {
    // é chamado quando ocorre algum erro no componente
  }

  componentDidMount() {
    // é chamado quando o componente é montado
  }

  componentWillUnmount() {
    // é chamado quando o componente é desmontado
  }

  // método principal que renderiza o componente
  render() {
    return (
      <div>
        <h1>Posts List</h1>
      </div>
    );
  }
}
