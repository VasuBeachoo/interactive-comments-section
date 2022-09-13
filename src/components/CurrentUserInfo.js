import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  mixinCommentAvatar,
  mixinCommentInfoBox,
  mixinCommentUsername,
} from "../GlobalStyle";

export const YouTag = styled.p`
  background-color: var(--Moderate-blue);
  color: var(--White);
  font-size: 0.9rem;
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
  margin: 0;
`;

export const CurrentUserName = styled.p`
  ${mixinCommentUsername}
`;

export const CurrentUserAvatar = styled.img`
  ${mixinCommentAvatar}
`;

export const CurrentUserBox = styled.div`
  ${mixinCommentInfoBox}
`;

const CurrentUserInfo = ({ className }) => {
  const currentUser = useSelector((state) => state.comments.data.currentUser);

  return (
    <CurrentUserBox className={className}>
      <CurrentUserAvatar
        src={currentUser.image.src}
        alt={currentUser.image.alt}
      />
      <CurrentUserName>{currentUser.username}</CurrentUserName>
      <YouTag>you</YouTag>
    </CurrentUserBox>
  );
};

export default CurrentUserInfo;
