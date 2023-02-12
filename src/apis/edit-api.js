import axios from "../configs/axios";

export const editProfile = (input) => axios.patch("/auth/edit-profile", input)