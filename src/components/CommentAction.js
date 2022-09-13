import styled from "styled-components";
import iconReply from "../assets/icon-reply.svg";
import iconDelete from "../assets/icon-delete.svg";
import iconEdit from "../assets/icon-edit.svg";

export const ActionText = styled.p`
  font-weight: 500;
  margin: 0;
`;

export const ActionIcon = styled.img``;

export const CommentActionBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const CommentAction = ({ className, iconSrc, iconAlt, text }) => {
  return (
    <CommentActionBox className={className}>
      <ActionIcon src={iconSrc} alt={iconAlt} />
      <ActionText>{text}</ActionText>
    </CommentActionBox>
  );
};

export const ReplyAction = styled(CommentAction).attrs({
  iconSrc: iconReply,
  iconAlt: "reply-icon",
  text: "Reply",
})`
  color: var(--Moderate-blue);
`;

export const DeleteAction = styled(CommentAction).attrs({
  iconSrc: iconDelete,
  iconAlt: "delete-icon",
  text: "Delete",
})`
  color: var(--Soft-red);
`;

export const EditAction = styled(CommentAction).attrs({
  iconSrc: iconEdit,
  iconAlt: "edit-icon",
  text: "Edit",
})`
  color: var(--Moderate-blue);
`;

export default CommentAction;
