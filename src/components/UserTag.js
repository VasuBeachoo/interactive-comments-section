import styled from "styled-components";

export const TagText = styled.span``;

export const UserTagBox = styled.span`
  user-select: none;
  color: var(--Moderate-blue);
  font-weight: 500;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

const UserTag = ({ className, username }) => {
  return (
    <UserTagBox className={className}>
      <TagText>@{username}</TagText>
    </UserTagBox>
  );
};

export default UserTag;
