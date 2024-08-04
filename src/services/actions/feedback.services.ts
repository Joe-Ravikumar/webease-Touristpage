import api from "../api";

const prefix = "/feedBack";

export const createFeedBack = async (data: any): Promise<any> =>
  await api.post(`${prefix}/`, data);

export const displayFeedBack = async (): Promise<any> =>
  await api.get(`${prefix}/display`);
