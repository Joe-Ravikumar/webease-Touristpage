"use client";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

export default function ModelLayout({
  title,
  children,
  show,
  close,
}: Readonly<{
  title: string | null;
  children: React.ReactNode;
  show: boolean;
  close: () => void;
}>) {
  const [showModel, setShowModel] = useState(show);

  useEffect(() => {
    setShowModel(show);
  }, [show]);

  if (!showModel) return null;

  return (
    <div className="absolute flex h-screen w-screen left-0 top-0 justify-center items-center bg-gray-900 bg-opacity-50">
      <div className="bg-[white] p-2 drop-shadow-md rounded-xl z-40 transform hover:scale-103 duration-300 hover:shadow-lg">
        <div className="flex justify-between border-b">
          <span className="MS-2 p-4 text-4xl">{title ?? ""}</span>
          <button className="p-3" onClick={close}>
            <Icon
              icon="material-symbols:close"
              className="text-4xl hover:text-red-600"
            />
          </button>
        </div>
        <>{children}</>
      </div>
    </div>
  );
}
