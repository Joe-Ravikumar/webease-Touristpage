"use client";
import OrderTable from "@/components/order/OrderTable";
import FixedButton from "@/components/button/FixedButton";
import React from "react";

const OrderManagement: React.FC = () => {
  return (
    <div className="xl:ml-[287px]">
      <div className="px-8 min-h-screen">
        <FixedButton
          name="New Order Request"
          url="/profile/order-management/new-request"
        />
        <div className="flex flex-col  items-center min-h-screen">
          <OrderTable />
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;
