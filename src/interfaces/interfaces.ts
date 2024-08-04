export interface User {
  _id?: string | null;
  username: string | null;
  email: string | null;
  gender: string | null;
  phone: string | null;
  address: string | null;
  profilePic?: string | null;
  role?: string | null;
  password?: string | null;
  confirmPassword?: string | null;
}

export interface Conversation {
  _id: String | null;
  participants: String[] | null;
  messages: String[] | null;
  createdAt?: String | null;
  updatedAt?: String | null;
}

export interface Message {
  _id: String | null;
  senderID: String | null;
  receverID: String | null;
  message: String | null;
  createdAt?: String | null;
  updatedAt?: String | null;
}

export interface ResetPasswordByOtp {
  userID: String | null;
  otp: String | null;
  newPassword: String | null;
  confirmPassword: String | null;
}

export interface VerifyOtp {
  userID: string | null;
  otp: string | null;
}
export interface Order {
  _id?: string | null;
  clientID?: string | null;
  categoryID: string | string[] | null;
  subCategoryID: string | string[] | null;
  name: string | null;
  purpose: string | null;
  description: string | null;
  content: string | null;
  colorTheme: string | null;
  images: string[] | null;
  files: string[] | null;
  status: string | null;
}
export interface OrderRequest {
  _id?: string | null;
  clientID?: string | null;
  orderID: string | string[] | null;
  totalPrice: string | null;
  advance: string | null;
  status: string | null;
  statusClient: string | null;
}
