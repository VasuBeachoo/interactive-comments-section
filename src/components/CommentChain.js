import styled from "styled-components";
import Comment from "./Comment";

export const RepliesBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 0.75rem;
  width: 95%;
  border-left: 0.1rem solid #d3d3d3;
  padding-left: clamp(1rem, 5vw, 3.15rem);

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const CommentChainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: 0.75rem;
`;

const CommentChain = ({ className, comment, replies }) => {
  return (
    <CommentChainBox className={className}>
      <Comment key={comment.id} commentId={comment.id} data={comment} />
      {replies.length !== 0 && (
        <RepliesBox>
          {replies.map((reply) => (
            <Comment key={reply.id} commentId={comment.id} data={reply} />
          ))}
        </RepliesBox>
      )}
    </CommentChainBox>
  );
};

export default CommentChain;
