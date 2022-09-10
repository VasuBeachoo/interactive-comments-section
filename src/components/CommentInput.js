import styled from "styled-components";

export const SubmitBtn = styled.button``;

export const InputArea = styled.input.attrs({ type: "text" })``;

export const AvatarImg = styled.img.attrs({ alt: "user-avatar" })``;

export const CommentInputBox = styled.div``;

const CommentInput = ({ className, userAvatar, btnText }) => {
  return (
    <CommentInputBox className={className}>
      {userAvatar && <AvatarImg src={userAvatar} />}
      <InputArea />
      <SubmitBtn>{btnText}</SubmitBtn>
    </CommentInputBox>
  );
};

export default CommentInput;
