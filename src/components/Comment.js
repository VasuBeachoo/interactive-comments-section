import styled from "styled-components";
import Rating from "./Rating";
import UserTag from "./UserTag";
import { ReplyAction, DeleteAction, EditAction } from "./CommentAction";
import CommentInput from "./CommentInput";
import { mixinBlock } from "../GlobalStyle";

export const CommentText = styled.p`
  grid-area: 2 / 2 / span 1 / span 2;
  color: var(--Grayish-blue);
  line-height: 2.35ch;
  margin: 0;
`;

export const CommentAge = styled.p`
  color: var(--Grayish-blue);
  margin: 0;
`;

export const CommentUsername = styled.p`
  font-weight: 500;
  margin: 0;
`;

export const CommentAvatar = styled.img`
  width: 2rem;
`;

export const CommentInfoBox = styled.div`
  grid-area: 1 / 2 / span 1 / span 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

export const CommentRating = styled(Rating)`
  grid-area: 1 / 1 / span 2 / span 1;
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
  align-items: center;
`;

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
