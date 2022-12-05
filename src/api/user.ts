import { IUserRequest } from "types/user";
import { axiosPrivate } from "./axios";

export const updateUserDetails = async (userObj: IUserRequest) => {
  const { data } = await axiosPrivate.put("/users/edit", userObj);
  return data;
};
