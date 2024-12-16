"use client";
import { usePathname } from "next/navigation";

const NotFound = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600">
        The path <span className="font-mono text-blue-500">{pathname}</span> does not exist.
      </p>
      <button
        className="mt-6 px-4 py-2 text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 focus:outline-none"
        onClick={() => window.history.back()}
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
