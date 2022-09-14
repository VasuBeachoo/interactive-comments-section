import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Rating from "./Rating";
import UserTag from "./UserTag";
import CurrentUserInfo from "./CurrentUserInfo";
import { ReplyAction, DeleteAction, EditAction } from "./CommentAction";
import CommentInput from "./CommentInput";
import { deleteComment, removeReply } from "../commentsSlice";
import {
  mixinBlock,
  mixinCommentAvatar,
  mixinCommentInfoBox,
  mixinCommentUsername,
} from "../GlobalStyle";

export const ActionsBox = styled.div`
  grid-area: 1/ 3 / span 1 / span 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.35rem;

  @media (max-width: 800px) {
    grid-area: 3 / 3 / span 1 / span 1;
  }

  @media (max-width: 420px) {
    grid-area: 4 / 1 / span 1 / span 1;
  }
`;

export const CommentText = styled.p`
  grid-area: 2 / 2 / span 1 / span 2;
  color: var(--Grayish-blue);
  line-height: 2.5ch;
  margin: 0;

  @media (max-width: 800px) {
    grid-area: 2 / 1 / span 1 / span 3;
  }
`;

export const CommentAge = styled.p`
  color: var(--Grayish-blue);
  margin: 0;
`;

export const CommentUsername = styled.p`
  ${mixinCommentUsername}
`;

export const CommentAvatar = styled.img`
  ${mixinCommentAvatar}
`;

export const CommentInfoBox = styled.div`
  ${mixinCommentInfoBox}
  grid-area: 1 / 2 / span 1 / span 1;

  @media (max-width: 800px) {
    grid-area: 1 / 1 / span 1 / span 3;
  }
`;

export const CommentRating = styled(Rating)`
  grid-area: 1 / 1 / span 2 / span 1;

  @media (max-width: 800px) {
    grid-area: 3 / 1 / span 1 / span 1;
  }
`;

export const CommentBox = styled.div`
  ${mixinBlock}
  display: grid;
  grid-template: auto / auto 1fr auto;
  row-gap: 1rem;
  column-gap: 2rem;
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: 0.65rem;
  width: 100%;
`;

const Comment = ({ className, commentId, replyId, data }) => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.comments.data.currentUser);

  const [showReplyInput, setShowReplyInput] = useState(false);

  const handleDeleteClick = () => {
    dispatch(deleteComment(data.id));
    if (replyId !== undefined)
      dispatch(removeReply({ commentId: commentId, replyId: replyId }));
  };

  return (
    <CommentContainer className={className}>
      <CommentBox>
        <CommentRating ratingId={data.id} rating={data.score} />
        <CommentInfoBox>
          {currentUser === data.user ? (
            <CurrentUserInfo />
          ) : (
            <>
              <CommentAvatar
                src={data.user.image.src}
                alt={data.user.image.alt}
              />
              <CommentUsername>{data.user.username}</CommentUsername>
            </>
          )}
          <CommentAge>{data.createdAt}</CommentAge>
        </CommentInfoBox>
        <CommentText>
          {data.replyingTo && (
            <>
              <UserTag username={data.replyingTo.username} />{" "}
            </>
          )}
          {data.content}
        </CommentText>
        <ActionsBox>
          {currentUser === data.user ? (
            <>
              <DeleteAction onClick={handleDeleteClick} />
              <EditAction />
            </>
          ) : (
            <ReplyAction onClick={() => setShowReplyInput(!showReplyInput)} />
          )}
        </ActionsBox>
      </CommentBox>
      {showReplyInput && (
        <CommentInput
          commentId={commentId}
          placeholder="Add a reply..."
          btnText="Reply"
          replyingTo={data.user}
          hideReplyInput={() => setShowReplyInput(false)}
        />
      )}
    </CommentContainer>
  );
};

export default Comment;
