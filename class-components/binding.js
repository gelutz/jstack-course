import React from "react";

/** Exemplo com bind */
class App extends React.Component {
  props = "something";

  constructor() {
    // vai printar 'undefined' por que o objeto
    // props não existe na função
    handleSomething();

    // passamos o handleSomething.bind(this) para o handleSomething
    // fazendo o objeto this da função virar o objeto que foi
    // passado como parâmetro
    handleSomething = handleSomething.bind(this);

    // como nesse caso o parâmetro foi o objeto this da classe
    // o objeto this da função vai possuir a propriedade props
    // e o console.log vai printar 'something'
    handleSomething();
  }

  // mesma coisa que definir com a keyword 'function'
  handleSomething() {
    console.log(this.props);
  }
}

/** Exemplo com arrow function */
class App extends React.Component {
  props = "something";

  constructor() {
    // e o console.log vai printar 'something'
    handleSomething();
  }

  handleSomething = () => {
    console.log(this.props);
  };
}
