import { Order, OrderRequest } from "@/interfaces/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { clear } from "console";

interface OrderState {
  order: Order | null;
  orderRequst: OrderRequest | null;
  uploading: boolean;
  selectedOrder: OrderRequest | null;
  revision: any;
}

const initialState: Partial<OrderState> = {
  order: null,
  orderRequst: null,
  uploading: false,
  selectedOrder: null,
  revision: null
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrder: (state, action: PayloadAction<Order>) => {
      state.order = action.payload;
    },
    clearOrder: (state) => {
      state.order = null;
    },
    setOrderRequest: (state, action: PayloadAction<OrderRequest>) => {
      state.orderRequst = action.payload;
    },
    clearOrderRequest: (state) => {
      state.orderRequst = null;
    },
    setUploading: (state, action: PayloadAction<boolean>) => {
      state.uploading = action.payload;
    },
    setSelectedOrder: (state, action: PayloadAction<OrderRequest>) => {
      state.selectedOrder = action.payload;
    },
    clearSelectedOrder: (state) => {
      state.selectedOrder = null;
    },
    setRevision: (state, action: PayloadAction<any>) => {
      state.revision = action.payload;
    },
    clearRevision: (state) => {
      state.revision = null;
    }
  },
});

export const {
    setOrder,
    clearOrder,
    setOrderRequest,
    clearOrderRequest,
    setUploading,
    setSelectedOrder,
    clearSelectedOrder,
    setRevision,
    clearRevision
} = orderSlice.actions;

export default orderSlice.reducer;
