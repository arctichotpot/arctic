import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Loader className="w-10 h-10 text-gray-700 animate-spin" />
      <p className="mt-4 text-lg font-semibold text-gray-700">Loading...</p>
    </div>
  );
}
