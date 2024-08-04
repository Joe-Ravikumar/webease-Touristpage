"use client";

import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { setUser } from "@/lib/features/authSlice";
import { AppStore, makeStore } from "@/lib/store";
import axios from "axios";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/auth/loggedUser",{ withCredentials: true })
      .then((response) => {
        if (storeRef.current && response?.data) {
          storeRef.current.dispatch(setUser(response?.data));
        }
      })
      .catch((error) => {
        console.error("Error fetching theme data:", error);
      });
  }, []);

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
