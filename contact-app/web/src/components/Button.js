import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 52px;
  border: none;
  background: ${({ theme }) => theme.colors.primary.main};
  font-size: 16px;
`;
