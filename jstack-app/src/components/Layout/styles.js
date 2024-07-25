import styled from "styled-components";

export const Nav = styled.nav`
  background: #000;
  martin-top: 16px;
  padding: 16px;
  border-radius: 4px;
  a {
    text-decoration: none;
    color: #fff;
    display: inline-block;

    & + a {
      margin-left: 16px;
    }
  }
`;
