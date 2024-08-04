"use client";
import CryptoJS from "crypto-js";

const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY || "your-secret-key";

export const encryptData = (data: string): string => {
  return CryptoJS.AES.encrypt(data, SECRET_KEY).toString();
};

export const decryptData = (encryptedData: string): string => {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch (error) {
    console.error("Failed to decrypt data", error);
  }
};

export const storeUserData = (key: string, value: any): void => {
  const encryptedData = encryptData(JSON.stringify(value));
  localStorage.setItem(key, encryptedData);
};

export const retrieveUserData = (key: string): any | null => {
  let encryptedData = null;
  if (typeof window !== "undefined") {
    encryptedData = window.localStorage.getItem(key);
  }
  if (!encryptedData) {
    return null;
  }
  const decryptedData = decryptData(encryptedData);
  try {
    return JSON.parse(decryptedData);
  } catch (e) {
    console.error("Failed to parse user data from local storage", e);
    return null;
  }
};

export const removeUserData = (key: string): void => {
  localStorage.removeItem(key);
};
