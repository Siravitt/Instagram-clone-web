import axios from "../configs/axios";

export const createComment = (input) =>
  axios.post("/comment/create-comment", input);
export const getCommentByPostId = (postId) =>
  axios.get(`/comment/get-comment/${postId}`);
