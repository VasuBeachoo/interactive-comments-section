import styled from "styled-components";
import CurrentUserInfo from "./CurrentUserInfo";
import { mixinBlock } from "../GlobalStyle";

export const SubmitBtn = styled.button`
  all: unset;
  box-sizing: border-box;
  font-family: "Rubik", sans-serif;
  user-select: none;
  background-color: var(--Moderate-blue);
  color: var(--White);
  border-radius: 0.25rem;
  padding: 0.65rem 1.25rem;
  transition: 0.25s;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  @media (max-width: 800px) {
    align-self: flex-end;
  }
`;

export const TextArea = styled.textarea.attrs({ rows: "4" })`
  flex-grow: 1;
  resize: none;
  font-size: 0.9rem;
  border: 0.1rem solid var(--Light-gray);
  border-radius: 0.25rem;
  outline: none;
  padding: 1rem;
  transition: 0.2s;

  &:focus {
    border-color: var(--Grayish-blue);
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const AvatarImg = styled.img`
  width: 2.25rem;
`;

export const CommentInputBox = styled.div`
  ${mixinBlock}
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const CommentInput = ({ className, placeholder, btnText }) => {
  return (
    <CommentInputBox className={className}>
      <CurrentUserInfo />
      <TextArea placeholder={placeholder} />
      <SubmitBtn>{btnText}</SubmitBtn>
    </CommentInputBox>
  );
};

export default CommentInput;
