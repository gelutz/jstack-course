import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 32px;
  word-break: break-all;

  p {
    max-width: 80%;
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`;
