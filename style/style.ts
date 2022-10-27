import styled, { css } from "styled-components";

interface ErrorMessageProps {
  color?: string;
}

const red = "#ff0000";

export const ErrorMessage = styled.p<ErrorMessageProps>`
  ${({ color }) => css`
    display: flex;
    color: ${color || red};
    text-align: center;
    justify-content: flex-end;
    font-size: 12px;
    font-weight: bold;
    white-space: pre-line;
    margin-top: -0.5rem;
  `}
`;

export const CheckboxLeft = styled.div`
  ${() => css`
    display: flex;
    width: 100%;
    align-items: center;
    text-align: end;
  `}
`;
