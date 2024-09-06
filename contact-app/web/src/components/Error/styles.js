import styled from "styled-components";

export const Container = styled.div`
  border-top: 2px solid ${({ theme }) => theme.colors.gray[100]};
  padding-top: 16px;
  display: flex;

  .details {
    margin-left: 16px;
    flex-direction: row;

    p {
      padding-bottom: 16px;
      font-weight: bold;
      font-size: 24px;
      color: ${({ theme }) => theme.colors.danger.main};
    }
  }
`;
