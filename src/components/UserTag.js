import styled from "styled-components";

export const TagText = styled.span``;

export const UserTagBox = styled.span`
  color: var(--Moderate-blue);
  font-weight: 500;
`;

const UserTag = ({ className, username }) => {
  return (
    <UserTagBox className={className}>
      <TagText>@{username}</TagText>
    </UserTagBox>
  );
};

export default UserTag;
