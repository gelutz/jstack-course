/* use Ref vs useState */
import { useEffect, useRef, useState } from "react";

export const useStateExample = () => {
  console.debug("useState renderizou"); // printa sempre que renderizar
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>useState</h1>
      <input onChange={() => setCount(count + 1)} />
    </div>
  );
};

export const useRefExample = () => {
  console.debug("useRef renderizou"); // só printa uma vez

  const inputRef = useRef(null);
  const divRef = useRef(null);

  useEffect(() => {
    // objeto ref que veio do DOM e pode ser manipulado
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h1>useRef</h1>
      <input ref={inputRef} />
      <div ref={divRef} />
    </div>
  );
};
/***/

/* não deixar o useEffect rodar quando o componente renderiza pela primeira vez */
import { useEffect, useRef, useState } from "react";
export const skippingUseEffect = () => {
  console.debug("componente skippingUseEffect renderizou"); // só printa uma vez

  const [randomState, setRandomState] = useState(0);
  const inputRef = useRef(false);

  useEffect(() => {
    if (inputRef.current) {
      // alguma função
      (() => {})();
    } else {
      inputRef.current = true;
    }
  }, [randomState]);

  return (
    <div>
      <h1>useRef</h1>
      <button onClick={() => setRandomState(randomState + 1)}>clicar</button>
    </div>
  );
};
/***/

/* removendo eventListeners depois que o componente desmontar */
import { useEffect, useRef, useState } from "react";
export const removingEventListeners = () => {
  console.debug("componente removingEventListeners renderizou"); // só printa uma vez

  const [randomState, setRandomState] = useState(0);
  const inputRef = useRef(false);

  useEffect(() => {
    function handleScroll() {
      console.log("scrollou");
    }

    inputRef.current.addEventListener("scroll", handleScroll);

    return () => {
      inputRef.current.removeEventListener("scroll", handleScroll);
    };
  }, [randomState]);

  return (
    <div>
      <h1>useRef</h1>
      <button onClick={() => setRandomState(randomState + 1)}>clicar</button>
    </div>
  );
};
/***/
