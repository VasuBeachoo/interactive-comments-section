import styled from "styled-components";
import Comment from "./Comment";

export const RepliesBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 1.5rem;
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
  align-items: flex-end;
  gap: 1.5rem;
`;

const CommentChain = ({ className, comment, replies }) => {
  return (
    <CommentChainBox className={className}>
      <Comment key={comment.id} data={comment} />
      <RepliesBox>
        {replies.map((reply) => (
          <Comment key={reply.id} data={reply} />
        ))}
      </RepliesBox>
    </CommentChainBox>
  );
};

export default CommentChain;
