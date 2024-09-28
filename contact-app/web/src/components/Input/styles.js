import styled, { css, keyframes } from "styled-components";

const load = keyframes`
  0% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  5%,
  95% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  10%,
  59% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
  }
  20% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;
  }
  38% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;
  }
  100% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
`;

const round = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  small {
    display: block;
    margin-top: 8px;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.danger.main};
  }

  // essa variável precisa ter o $ para que o styled-components saiba que é uma variavel transiente
  ${({ $error }) =>
    $error &&
    css`
      input {
        border: 2px solid ${({ theme }) => theme.colors.danger.main};
      }
    `}

  .form-item {
    position: relative;

    .loader {
      position: absolute;
      right: 16px;
      top: 18px;
      color: ${({ theme }) => theme.colors.primary.main};
      font-size: 16px;
      width: 1em;
      height: 1em;
      border-radius: 50%;
      -webkit-transform: translateZ(0);
      -ms-transform: translateZ(0);
      transform: translateZ(0);
      -webkit-animation: ${load} 1.7s infinite ease, ${round} 1.7s infinite ease;
      animation: ${load} 1.7s infinite ease, ${round} 1.7s infinite ease;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 52px;
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.white};
  font-size: 16px;

  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  outline: none;

  transition: color-all 0.3s cubic-bezier(0.6, -0.28, 0.735, 0.045);
  transition: 0.3s cubic-bezier(0.6, -0.28, 0.735, 0.045);
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    color: inherit;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[200]};
  }

  .form-item {
    ${({ isLoading }) =>
      isLoading &&
      `
    opacity: 0.6;
    pointer-events: none;
  `}
  }
`;
