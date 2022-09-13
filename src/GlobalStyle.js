import { createGlobalStyle, css } from "styled-components";

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  :root {
    --Moderate-blue: hsl(238, 40%, 52%);
    --Soft-red: hsl(358, 79%, 66%);
    --Light-grayish-blue: hsl(239, 57%, 85%);
    --Pale-red: hsl(357, 100%, 86%);
    --Dark-blue: hsl(212, 24%, 26%);
    --Grayish-blue: hsl(211, 10%, 45%);
    --Light-gray: hsl(223, 19%, 93%);
    --Very-light-gray: hsl(228, 33%, 97%);
    --White: hsl(0, 0%, 100%);
  }

  * {
    box-sizing: border-box;
    font-family: "Rubik", sans-serif;
  }

  body {
    background-color: var(--Very-light-gray);
    margin: 0;
  }
`;

export const mixinBlock = css`
  background-color: var(--White);
  border-radius: 0.35rem;
  padding: 2rem;
`;

export const mixinRatingIcon = css`
  user-select: none;
  width: 0.85rem;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    filter: brightness(0.65);
  }
`;

export default GlobalStyle;
