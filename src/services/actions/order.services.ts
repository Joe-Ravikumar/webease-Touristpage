import { Order } from "@/interfaces/interfaces";
import api from "../api";

const prefix = "/order";

export const getOrder = async (orderID: string): Promise<any> =>
  await api.get(`${prefix}/${orderID}`);

export const updateOrderRequest = async ({
  orderRequestID,
  data,
}: {
  orderRequestID: string;
  data: any;
}): Promise<any> =>
  await api.put(`${prefix}/orderRequest/${orderRequestID}`, data);

export const deleteOrderRequest = async (
  orderRequestID: string
): Promise<any> => await api.delete(`${prefix}/orderRequest/${orderRequestID}`);

export const getAllOrdersByClientID = async (
  clientID: string
): Promise<any[]> => await api.get(`${prefix}/client/${clientID}`);

export const createOrder = async (data: any): Promise<any[]> =>
  await api.post(`${prefix}/`, data);

export const getOrdreRequestByClient = async (): Promise<any[]> =>
  await api.get(`${prefix}/orderRequest/client`);

export const getAllOrderSubmitionsByOrderId = async (
  orderID: string
): Promise<any[]> => await api.get(`${prefix}/orderSubmition/order/${orderID}`);

export const getAllRevisionsByOrderId = async (
  orderID: string
): Promise<any[]> => await api.get(`${prefix}/revision/order/${orderID}`);

export const createRevision = async ({
  orderID,
  data,
}: {
  orderID: string;
  data: any;
}): Promise<any> =>
  await api.post(`${prefix}/revision/order/${orderID}`, data);
