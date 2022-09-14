import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteComment, removeReply, changePopup } from "../commentsSlice";
import { mixinDeletePopupBtn } from "../GlobalStyle";

export const DeleteConfirmBtn = styled.button`
  ${mixinDeletePopupBtn}
  background-color: var(--Soft-red);
`;

export const DeleteCancelBtn = styled.button`
  ${mixinDeletePopupBtn}
  background-color: var(--Grayish-blue);
`;

export const BtnsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.75rem;
  width: 100%;

  @media (max-width: 340px) {
    flex-direction: column;
  }
`;

export const DeleteText = styled.p`
  color: var(--Grayish-blue);
  font-size: 1.075rem;
  line-height: 2.5ch;
  margin: 0;
`;

export const DeleteHeader = styled.h3`
  color: var(--Dark-blue);
  font-size: 1.35rem;
  font-weight: 500;
  margin: 0;
`;

export const DeletePopupBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.25rem;
  width: clamp(15rem, 80%, 30rem);
  background-color: var(--White);
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  padding: 2rem;
`;

const DeletePopup = ({ className }) => {
  const dispatch = useDispatch();

  const popupInfo = useSelector((state) => state.comments.popupInfo);

  const handleDeleteClick = () => {
    dispatch(deleteComment(popupInfo.dataId));
    if (popupInfo.replyId !== undefined)
      dispatch(
        removeReply({
          commentId: popupInfo.commentId,
          replyId: popupInfo.replyId,
        })
      );
    dispatch(changePopup(""));
  };

  return (
    <DeletePopupBox className={className}>
      <DeleteHeader>Delete comment</DeleteHeader>
      <DeleteText>
        Are you sure you want to delete this comment? This will remove the
        comment and can't be undone.
      </DeleteText>
      <BtnsBox>
        <DeleteCancelBtn onClick={() => dispatch(changePopup(""))}>
          NO, CANCEL
        </DeleteCancelBtn>
        <DeleteConfirmBtn onClick={handleDeleteClick}>
          YES, DELETE
        </DeleteConfirmBtn>
      </BtnsBox>
    </DeletePopupBox>
  );
};

export default DeletePopup;
