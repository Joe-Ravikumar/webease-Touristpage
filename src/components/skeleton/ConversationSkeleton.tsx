const ConversationSkeleton = () => {
  return (
    <div
      className={`flex gap-2 items-center rounded p-2 m-1 py-1 cursor-pointer animate-pulse`}
    >
      <div className="avatar">
        <div className=" bg-gray-200 dark:bg-gray-500 w-12 h-12 rounded-full shrink-0"></div>
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex gap-3 justify-between bg-gray-200 rounded-full dark:bg-gray-500 h-4 w-25"></div>
      </div>
    </div>
  );
};
export default ConversationSkeleton;
