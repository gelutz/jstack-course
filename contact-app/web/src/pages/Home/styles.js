import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin-top: 32px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: ${({ justifycontent }) => justifycontent};
  padding-bottom: 32px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary.lighter};

  strong {
    font-size: 24px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    padding: 0.5rem 1rem;
    transition: all 0.3s cubic-bezier(0.6, -0.28, 0.735, 0.045);
    border-radius: 4px;
    /* transition: all 0.3s ease-in-out; */

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const ListHeader = styled.header`
  padding-top: 24px;

  button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }

  span {
    color: ${({ theme }) => theme.colors.primary.main};
    margin-right: 8px;
    font-weight: bold;
  }

  img {
    transition: transform 0.3s cubic-bezier(0.6, -0.28, 0.735, 0.045);
    transform: ${({ order }) =>
			order === "asc" ? "rotate(0deg)" : "rotate(180deg)"};

    &:hover {
      cursor: pointer;
    }
  }
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  padding: 16px;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 16px;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;

      small {
        background: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: bold;
        text-transform: uppercase;
        padding: 4px;
        border-radius: 4px;
        margin-left: 8px;
      }
    }

    span {
      display: block;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }

  .actions {
    display: flex;
    align-items: center;

    button {
      background: transparent;
      border: none;
      margin-left: 8px;
    }
  }
`;

export const InputSearchContainer = styled.div`
  width: 100%;

  padding: 1rem 0;

  input {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    border: none;
    height: 50px;
    border-radius: 25px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    outline: 0;
    padding: 0 16px;

    &::placeholder {
      color: #bcbcbc;
    }
  }
`;
