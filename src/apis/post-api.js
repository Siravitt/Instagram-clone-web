import axios from "../configs/axios";

export const postImage = (input) => axios.post("/post/post-image", input);
export const getHolderImage = () => axios.get("/post/holder-image");
