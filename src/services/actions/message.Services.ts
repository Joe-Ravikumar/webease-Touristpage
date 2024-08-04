import { Message } from "@/interfaces/interfaces";
import api from "../api";

const prefix = "/message";

export const sendMessage = async (message:Partial<Message>): Promise<Message> =>
  await api.post(`${prefix}/send/admin`,message);

export const getMessages = async (): Promise<Message[]> =>
  await api.get(`${prefix}/admin`);
  
