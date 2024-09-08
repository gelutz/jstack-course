import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 32px;

  img {
    margin-bottom: 16px;
  }
  p {
    text-align: center;
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`;
