import styled from "styled-components";

export const TagText = styled.span``;

export const UserTagBox = styled.span``;

const UserTag = ({ className, username }) => {
  return (
    <UserTagBox className={className}>
      <TagText>@{username}</TagText>
    </UserTagBox>
  );
};

export default UserTag;
