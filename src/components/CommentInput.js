import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addComment, addReply, incrementCommentId } from "../commentsSlice";
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
  width: 100%;
  font-size: 0.95rem;
  line-height: 2.5ch;
  border: 0.1rem solid var(--Light-gray);
  border-radius: 0.25rem;
  outline: none;
  padding: 1rem;
  transition: 0.2s;

  &:focus {
    border-color: var(--Grayish-blue);
  }
`;

export const InputCurrentUserInfo = styled(CurrentUserInfo)`
  display: none;

  @media (max-width: 800px) {
    display: flex;
  }
`;

export const AvatarImg = styled.img`
  width: 2.5rem;

  @media (max-width: 800px) {
    display: none;
  }
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

const CommentInput = ({
  className,
  commentId,
  placeholder,
  btnText,
  replyingTo,
  hideReplyInput,
}) => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.comments.data.currentUser);
  const avatarImg = currentUser.image;

  const [textContent, setTextContent] = useState("");

  const handleSubmit = () => {
    if (textContent !== "") {
      const newComment = {
        content: textContent,
        user: currentUser,
      };
      if (replyingTo) newComment.replyingTo = replyingTo;
      else newComment.replies = [];

      dispatch(addComment(newComment));
      if (commentId !== undefined) {
        dispatch(addReply(commentId));
        hideReplyInput();
      }
      dispatch(incrementCommentId());
      setTextContent("");
    }
  };

  return (
    <CommentInputBox className={className}>
      <AvatarImg src={avatarImg.src} alt={avatarImg.alt} />
      <InputCurrentUserInfo />
      <TextArea
        placeholder={placeholder}
        value={textContent}
        onChange={(e) => setTextContent(e.target.value)}
      />
      <SubmitBtn onClick={handleSubmit}>{btnText}</SubmitBtn>
    </CommentInputBox>
  );
};

export default CommentInput;
