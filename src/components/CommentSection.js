import styled from "styled-components";
import CommentChain from "./CommentChain";
import CommentInput from "./CommentInput";
import * as users from "../users";

import userAvatar from "../assets/avatars/image-juliusomo.png";

export const CommentsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const CommentSectionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;
  width: clamp(10rem, 85vw, 50rem);
`;

const CommentSection = ({ className }) => {
  const data = {
    currentUser: users.userJuliusomo,
    comments: [
      {
        id: 1,
        content:
          "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
        createdAt: "1 month ago",
        score: 12,
        user: users.userAmyrobson,
        replies: [],
      },
      {
        id: 2,
        content:
          "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
        createdAt: "2 weeks ago",
        score: 5,
        user: users.userMaxblagun,
        replies: [
          {
            id: 3,
            content:
              "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
            createdAt: "1 week ago",
            score: 4,
            replyingTo: users.userMaxblagun,
            user: users.userRamsesmiron,
          },
          {
            id: 4,
            content:
              "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
            createdAt: "2 days ago",
            score: 2,
            replyingTo: users.userRamsesmiron,
            user: users.userJuliusomo,
          },
        ],
      },
    ],
  };

  const comments = data.comments;

  return (
    <CommentSectionBox className={className}>
      <CommentsBox>
        {comments.map((comment) => (
          <CommentChain key={comment.id} comment={comment} />
        ))}
      </CommentsBox>
      <CommentInput
        userAvatar={userAvatar}
        placeholder="Add a comment..."
        btnText="Send"
      />
    </CommentSectionBox>
  );
};

export default CommentSection;
