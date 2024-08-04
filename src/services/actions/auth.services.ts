import { ResetPasswordByOtp, User, VerifyOtp } from "@/interfaces/interfaces";
import api from "../api";

const prefix = "/auth";

export const signup = async (data: User): Promise<User> =>
  await api.post(`${prefix}/signup`, data);

export const login = async (data: User): Promise<User> =>
  await api.post(`${prefix}/login`, data);

export const logout = async (): Promise<any> =>
  await api.post(`${prefix}/logout`);

export const verifyOtp = async (data: VerifyOtp): Promise<any> =>
  await api.post(`${prefix}/verify`, data);

export const forgetPassword = async (email: string): Promise<any> =>
  await api.post(`${prefix}/forgetPassword`, email);

export const resetPasswordByOtp = async (
  data: ResetPasswordByOtp
): Promise<any> => await api.post(`${prefix}/resetPasswordByOtp`, data);

export const loggedUser = async (): Promise<User> =>
  await api.get(`${prefix}/loggedUser`);
