import { createSlice } from "@reduxjs/toolkit";
import * as users from "./users";

const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    commentId: 4,
    data: {
      currentUser: users.userJuliusomo,
      comments: [
        {
          id: 0,
          content:
            "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
          createdAt: "1 month ago",
          score: 12,
          user: users.userAmyrobson,
          replies: [],
        },
        {
          id: 1,
          content:
            "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
          createdAt: "2 weeks ago",
          score: 5,
          user: users.userMaxblagun,
          replies: [2, 3],
        },
        {
          id: 2,
          content:
            "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          createdAt: "1 week ago",
          score: 4,
          replyingTo: users.userMaxblagun,
          user: users.userRamsesmiron,
        },
        {
          id: 3,
          content:
            "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
          createdAt: "2 days ago",
          score: 2,
          replyingTo: users.userRamsesmiron,
          user: users.userJuliusomo,
        },
      ],
    },
  },
  reducers: {
    addComment: (state, action) => {
      action.payload.id = state.commentId;
      action.payload.createdAt = "Today";
      action.payload.score = 0;
      state.data.comments[state.commentId] = action.payload;
    },
    addReply: (state, action) => {
      state.data.comments[action.payload].replies.push(state.commentId);
    },
    changeRating: (state, action) => {
      console.log(action.payload);
      state.data.comments[action.payload.id].score = action.payload.rating;
    },
    incrementCommentId: (state) => state.commentId++,
  },
});

export const { addComment, addReply, changeRating, incrementCommentId } =
  commentsSlice.actions;

export default commentsSlice;
