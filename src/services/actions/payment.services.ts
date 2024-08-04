import api from "../api";

const prefix = "/payment";

export const payhash = async (data: any): Promise<any> =>
  await api.post(`${prefix}/payment-hash`, data);
