import { useSelector } from "react-redux";
import styled from "styled-components";
import CommentChain from "./CommentChain";
import CommentInput from "./CommentInput";

export const CommentsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;
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

  const getReplies = (replyIds) => {
    const replies = [];
    comments.forEach((comment) => {
      if (replyIds.includes(comment.id)) replies.push(comment);
    });
    return replies;
  };

  return (
    <CommentSectionBox className={className}>
      <CommentsBox>
        {comments.map((comment) => {
          if (comment.replies)
            return (
              <CommentChain
                key={comment.id}
                comment={comment}
                replies={getReplies(comment.replies)}
              />
            );
        })}
      </CommentsBox>
      <CommentInput placeholder="Add a comment..." btnText="Add" />
    </CommentSectionBox>
  );
};

export default CommentSection;
