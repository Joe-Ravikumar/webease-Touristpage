import api from "../api";

const prefix = "/packges";

export const packages = async (data: any): Promise<any> =>
  await api.post(`${prefix}/`, data);
