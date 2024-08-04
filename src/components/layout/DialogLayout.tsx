import React, { useEffect, useState } from 'react'

export default function DialogLayout({
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
        <div className="bg-[white] p-2 drop-shadow-md rounded-xl transform hover:scale-103 duration-300 hover:shadow-lg lg:w-[600px] w-[90vw] mx-4">
          <div className="flex justify-between border-b">
            <span className="MS-2 p-4 text-4xl">{title ?? ""}</span>
            <button className="p-3" onClick={close}>
            </button>
          </div>
          <>{children}</>
        </div>
      </div>
    );
}
