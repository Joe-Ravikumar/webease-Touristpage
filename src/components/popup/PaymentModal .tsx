"use client";
import useMutation from "@/hooks/useMutation";
import usePayHere from "@/hooks/usePayHere";
import { payhash } from "@/services/actions/payment.services";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import toast from "react-hot-toast";
import LoadingAnimation from "../LoadingAnimation";
import { useAppSelector } from "@/hooks/reduxHooks";
import { useRouter } from "next/navigation";
import { to } from "react-spring";

interface PaymentModalProps {
  return_url: string;
  cancel_url: string;
  notify_url: string;
  order_id: string;
  items: string;
  amount: string;
  currency: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  delivery_address: string;
  delivery_city: string;
  delivery_country: string;
  afterPayment?: () => void;
}

const PaymentModal: React.FC<Partial<PaymentModalProps>> = ({
  return_url,
  cancel_url,
  notify_url,
  order_id,
  items,
  amount,
  afterPayment = () => {},
}) => {
  const router = useRouter();
  const user = useAppSelector((state) => state.auth.user);
  const [payData, setPayData] = useState<any>({});
  const [formData, setFormData] = useState<any>({
    first_name: "",
    last_name: "",
    city: "",
    country: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { startPayment } = usePayHere(payData);

  const { data, error, isLoading, mutate } = useMutation<any>(payhash);

  useEffect(() => {
    if (data) {
      data && startPayment(data);
    }
    if (error) {
      toast.error(error);
      console.error(error);
    }
  }, [data, error]);

  useEffect(() => {
    setPayData({
      return_url,
      cancel_url,
      notify_url,
      order_id,
      items,
      amount,
      currency: "LKR",
      first_name: formData?.first_name,
      last_name: formData?.last_name,
      email: user?.email,
      phone: user?.phone,
      address: user?.address,
      city: formData?.city,
      country: formData?.country,
      delivery_address: user?.address,
      delivery_city: formData?.city,
      delivery_country: formData?.country,
    });
  }, [formData]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await mutate({
      amount: amount,
      orderId: order_id,
    });
  };

  // Payment event handlers
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).payhere) {
      (window as any).payhere.onCompleted = async function () {
        toast.success(`Payment completed`);
        afterPayment();
        router.push(return_url);
      };

      (window as any).payhere.onDismissed = function () {
        toast.custom("Payment dismissed");
        router.refresh();
      };

      (window as any).payhere.onError = function (error: string) {
        toast.error(`Error: ${error}`);
        router.refresh();
      };
    }
  }, [data, error]);

  return (
    <>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="flex-col justify-center items-center">
          <label
            htmlFor="first_name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            First Name
          </label>
          <div className="mt-2">
            <input
              id="first_name"
              name="first_name"
              type="text"
              required
              value={formData.first_name}
              onChange={handleChange}
              className="peer block w-full appearance-none border-0 border-b border-[#80BBFF] bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#5c87b8] focus:outline-none focus:ring-0"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Last Name
          </label>
          <div className="mt-2">
            <input
              id="last_name"
              name="last_name"
              type="text"
              autoComplete="last_name"
              required
              value={formData.last_name}
              onChange={handleChange}
              className="peer block w-full appearance-none border-0 border-b border-[#80BBFF] bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#5c87b8] focus:outline-none focus:ring-0"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              City
            </label>
            <div className="text-sm"></div>
          </div>
          <div className="mt-2">
            <input
              id="city"
              name="city"
              type="text"
              autoComplete="current-city"
              required
              value={formData.city}
              onChange={handleChange}
              className="peer block w-full appearance-none border-0 border-b border-[#80BBFF] bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#80BBFF] focus:outline-none focus:ring-0"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Country
            </label>
          </div>
          <div className="mt-2">
            <input
              id="country"
              name="country"
              type="text"
              autoComplete="country"
              required
              value={formData.country}
              onChange={handleChange}
              className="peer block w-full appearance-none border-0 border-b border-[#80BBFF] bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#80BBFF] focus:outline-none focus:ring-0"
            />
          </div>
        </div>

        <button
          className="bg-blue-600 text-white p-2 rounded-lg mt-2 w-full flex items-center justify-center disabled:opacity-90 hover:opacity-95"
          id="payhere-button"
          disabled={isLoading}
          type="submit"
        >
          Pay with Payhere
          {isLoading && (
            <span className="ms-2">
              <LoadingAnimation />
            </span>
          )}
        </button>
      </form>
    </>
  );
};

export default PaymentModal;
