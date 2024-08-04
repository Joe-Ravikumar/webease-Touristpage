"use client";

export default function RejctOrderModel() {
  return (
    <div className="lg:w-[900px] sm:w-full">
      <div className="flex p-4">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="">DO YOU WANTS TO REJECT THIS ORDER</div>
          <div className="flex justify-between mt-4">
            <button className="bg-red-600 text-white p-2 rounded-lg">
              REJECT
            </button>
            <button className="bg-blue-600 text-white p-2 rounded-lg">
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
