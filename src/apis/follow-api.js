import axios from "../configs/axios";

export const getIsFollow = (id) => axios.get(`/follow/is-follow/${id}`);
export const getAllFollow = (userId) =>
  axios.get(`/follow/get-all-follow/${userId}`);
export const onFollow = (id) => axios.post("/follow/create-follow", id);
export const onUnFollow = (id) => axios.delete(`/follow/delete-follow/${id}`);
