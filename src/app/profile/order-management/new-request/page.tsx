"use client";
import OrderProgressPage from "@/app/order/order-progress/page";
import PlaceOrderPage from "@/app/order/place-order/page";
import React from "react";

const OrderManagement: React.FC = () => {
  return (
    <div className="xl:ml-[287px]">
      <PlaceOrderPage />
    </div>
  );
};

export default OrderManagement;
