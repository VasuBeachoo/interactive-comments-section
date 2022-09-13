import { useSelector } from "react-redux";
import styled from "styled-components";
import { mixinCommentAvatar, mixinCommentUsername } from "../GlobalStyle";

export const CurrentUserName = styled.p`
  ${mixinCommentUsername}
`;

export const CurrentUserAvatar = styled.img`
  ${mixinCommentAvatar}
`;

export const CurrentUserBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
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
    </CurrentUserBox>
  );
};

export default CurrentUserInfo;
