import styled from "styled-components";
import Comment from "./Comment";

export const RepliesBox = styled.div``;

export const CommentChainBox = styled.div``;

const CommentChain = ({ className, comment }) => {
  return (
    <CommentChainBox className={className}>
      <Comment key={comment.id} data={comment} />
      <RepliesBox>
        {comment.replies.map((reply) => (
          <Comment key={reply.id} data={reply} />
        ))}
      </RepliesBox>
    </CommentChainBox>
  );
};

export default CommentChain;
