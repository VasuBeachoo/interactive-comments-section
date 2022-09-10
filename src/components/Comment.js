import styled from "styled-components";
import CommentRating from "./CommentRating";
import UserTag from "./UserTag";
import { ReplyAction, DeleteAction, EditAction } from "./CommentAction";
import CommentInput from "./CommentInput";

export const CommentText = styled.p``;

export const CommentAge = styled.p``;

export const CommentUsername = styled.p``;

export const CommentAvatar = styled.img``;

export const CommentInfoBox = styled.div``;

export const CommentBox = styled.div``;

export const CommentContainer = styled.div``;

const Comment = ({ className, data }) => {
  return (
    <CommentContainer className={className}>
      <CommentBox>
        <CommentRating rating={data.score} />
        <CommentInfoBox>
          <CommentAvatar src={data.user.image.src} alt={data.user.image.alt} />
          <CommentUsername>{data.user.username}</CommentUsername>
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
        <ReplyAction />
      </CommentBox>
      <CommentInput btnText="Reply" />
    </CommentContainer>
  );
};

export default Comment;
