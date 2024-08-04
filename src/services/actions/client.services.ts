import { User } from "@/interfaces/interfaces";
import api from "../api";

export interface clients {
  users: User[];
  totalPages: string;
}

export interface changePassword {
  oldPassword: string;
  newNassword: string;
  ConfirmPassword: string;
}

const prefix = "/users";

export const getUsers = async (): Promise<User[]> =>
  await api.get(`${prefix}/`);

export const getAllUsers = async (): Promise<clients> =>
  await api.get(`${prefix}/all`);

export const getUser = async (id: String): Promise<User> =>
  await api.get(`${prefix}/${id}`);

export const updateUser = async ({
  id,
  data,
}: {
  id: String;
  data: Partial<User>;
}): Promise<any> => await api.put(`${prefix}/${id}`, data);

export const deleteUser = async (id: String): Promise<any> =>
  await api.delete(`${prefix}/${id}`);

export const changePassword = async (
  data: changePassword
): Promise<any> =>
  await api.post(`${prefix}/changePassword`, data);
