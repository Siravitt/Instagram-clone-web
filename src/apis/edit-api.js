import axios from "../configs/axios";

export const editProfile = (input) => axios.patch("/profile/edit-profile", input)