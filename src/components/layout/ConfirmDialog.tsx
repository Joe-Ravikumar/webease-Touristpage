import React, { useEffect, useState } from "react";

export default function ConfirmDialog({
  title,
  icon,
  message,
  show,
  close,
  onConfirm,
}: Readonly<{
  title: string | null;
  icon: React.ReactNode | null;
  message: string | null;
  show: boolean;
  close: () => void;
  onConfirm: () => void;
}>) {
  const [showModel, setShowModel] = useState(show);

  useEffect(() => {
    setShowModel(show);
  }, [show]);

  if (!showModel) return null;

  return (
    <div className="absolute flex h-screen w-screen left-0 top-0 justify-center items-center bg-gray-900 bg-opacity-50">
      <div className="bg-[white] p-2 drop-shadow-md z-50 rounded-xl transform hover:scale-103 duration-300 hover:shadow-lg lg:w-[600px] w-[90vw] mx-4">
        <div className="flex justify-center border-b">
          <span className="p-4 text-xl">{title ?? ""}</span>
        </div>
        <div className="flex justify-center items-center p-4">
          {icon}
          <p className="text-xl p-4">{message}</p>
        </div>
        <div className="flex justify-center border-b gap-4">
          <button
            className="bg-red-600 w-full text-white p-2 rounded-lg mt-2 flex items-center justify-center disabled:opacity-90 hover:opacity-95"
            onClick={close}
          >
            Cancel
          </button>
          <button
            className="bg-blue-600 w-full text-white p-2 rounded-lg mt-2 flex items-center justify-center disabled:opacity-90 hover:opacity-95"
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
