import { useSelector } from "react-redux";
import styled from "styled-components";
import CommentChain from "./CommentChain";
import CommentInput from "./CommentInput";

export const CommentsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const CommentSectionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;
  width: clamp(10rem, 85vw, 50rem);
`;

const CommentSection = ({ className }) => {
  const comments = useSelector((state) => state.comments.data.comments);

  return (
    <CommentSectionBox className={className}>
      <CommentsBox>
        {comments.map((comment) => (
          <CommentChain key={comment.id} comment={comment} />
        ))}
      </CommentsBox>
      <CommentInput placeholder="Add a comment..." btnText="Add" />
    </CommentSectionBox>
  );
};

export default CommentSection;
