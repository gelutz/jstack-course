import styled, { css } from "styled-components";

const variantStyles = {
	error: css`
        background-color: ${({ theme }) => theme.colors.danger.main};
    `,
	success: css`
        background-color: ${({ theme }) => theme.colors.success.main};
    `,
	default: css`
        background-color: ${({ theme }) => theme.colors.primary.main};
    `,
};

export const Container = styled.div`
    ${({ $type }) => variantStyles[$type] || variantStyles.default}
    padding: 1rem 1.5rem;
    box-shadow: 0px 20px 20px -16px rgba(0,0,0,0.25);
    border-radius: 4px;
    display: flex;
    align-items: center;
    
    img {
        height: 100%;
        padding-right: 1rem;
    }

    strong {
        color: #fff;
    }

    & + & {
        margin-top: 1rem;
    }
`;
