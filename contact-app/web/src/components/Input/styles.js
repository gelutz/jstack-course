import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
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
    ${({ isLoading }) =>
      isLoading &&
      css`
        opacity: 0.6;
        pointer-events: none; // desabilita a interação do input

        .loader {
          position: absolute;
          transform: translateY(-50%);
          top: 50%;
          right: 16px;
        }
      `}
  }
`;

export const Input = styled.input`
  position: relative;
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
`;
