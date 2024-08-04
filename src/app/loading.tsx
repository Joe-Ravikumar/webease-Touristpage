import LoadingAnimation from "@/components/LoadingAnimation";

export default function Loading() {
  return (
    <div className="absolute flex h-screen w-screen left-0 top-0 justify-center items-center bg-gray-900 bg-opacity-50">
      <LoadingAnimation />
      <span className="text-2xl">Loading...</span>
    </div>
  );
}
