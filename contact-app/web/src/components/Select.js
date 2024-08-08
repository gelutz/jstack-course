import styled from "styled-components";

export const Select = styled.select`
  width: 100%;
  height: 52px;
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.white};
  font-size: 16px;

  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  outline: none;

  transition: border-color 0.3s cubic-bezier(0.6, -0.28, 0.735, 0.045);

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`;
