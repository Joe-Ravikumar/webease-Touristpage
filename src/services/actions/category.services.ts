import api from "../api";

const prefix = "/category";

export const getAllCategory = async (): Promise<any[]> =>
  await api.get(`${prefix}/`);

export const getAllSubCategory = async (): Promise<any[]> =>
  await api.get(`${prefix}/sub`);

export const getAllSubCategoryByCategory = async (
  categoryID: string
): Promise<any[]> => await api.get(`${prefix}/${categoryID}/sub`);
