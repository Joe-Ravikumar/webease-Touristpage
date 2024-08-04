const messageSkeleton = () => {

  const fromMe = Math.random() < 0.5 ? true : false;

  return (
    <>
      <div className={`chat animate-pulse flex items-start ${
              fromMe
                ? "flex-row-reverse"
                : "flex-row"
            }`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <div className=" bg-gray-200 dark:bg-gray-500 w-10 h-10 rounded-full shrink-0"></div>
          </div>
        </div>
        <div className="max-w-[320px]">
          <div
            className={`p-4 bg-gray-200 dark:bg-gray-500 w-60 h-10 rounded ${
              fromMe
                ? "mr-1 mt-4 rounded-s-2xl rounded-ee-2xl"
                : "ml-1 mt-4 rounded-e-2xl rounded-es-2xl"
            }`}
          >
          </div>
        </div>
      </div>
    </>
  );
};

export default messageSkeleton;
