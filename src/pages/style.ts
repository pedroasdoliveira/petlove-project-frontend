import styled, { css } from "styled-components";

export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    display: flex;
    color: red;
    text-align: center;
    justify-content: flex-end;
    font-size: 12px;
    font-weight: bold;
    white-space: pre-line;
    margin-top: -0.5rem;
  `}
`;

export const CheckboxLeft = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    align-items: center;
    text-align: end;
  `}
`;
