import styled, { css } from "styled-components";

interface ErrorMessageProps {
  color?: string;
}

const red = "#ff0000";

export const ErrorMessage = styled.p<ErrorMessageProps>`
  ${({ theme, color }) => css`
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
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    align-items: center;
    text-align: end;
  `}
`;

// export const OptionSelect = styled.select`
//   width: 260px;
//   height: auto;
//   text-align: center;
//   font-size: 1.2rem;
//   outline: none;
//   color: #f4f5f9;
//   background-color: transparent;
//   border-radius: 10px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;
// `;

// export const Options = styled.option`
//   color: #f4f5f9;
//   background-color: transparent;
//   font-weight: 400;
// `
