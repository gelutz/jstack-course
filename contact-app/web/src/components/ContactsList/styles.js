import styled from "styled-components";

export const Container = styled.div`
  margin-top: 32px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;

  strong {
    color: #222;
    font-size: 24px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};

    transition: all 0.3s cubic-bezier(0.6, -0.28, 0.735, 0.045);
    /* transition: all 0.3s ease-in-out; */

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }
`;

export const ListContainer = styled.div`
  border-top: 2px solid ${({ theme }) => theme.colors.primary.lighter};
  margin-top: 24px;
  padding-top: 24px;

  header {
    button {
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
    }

    span {
      color: ${({ theme }) => theme.colors.primary.main};
      margin-right: 8px;
      font-weight: bold;
    }
  }
`;

export const Card = styled.div`
  margin-bottom: 8px;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  padding: 16px;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
