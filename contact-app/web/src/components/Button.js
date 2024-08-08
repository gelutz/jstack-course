import styled, { css } from "styled-components";

export const Button = styled.button`
  height: 52px;
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray[200]};
  }

  ${({ danger, theme }) =>
    danger &&
    css`
      background-color: ${theme.colors.danger.main};
      &:hover {
        background-color: ${theme.colors.danger.light};
      }
      &:active {
        background-color: ${theme.colors.danger.dark};
      }
    `}
`;
