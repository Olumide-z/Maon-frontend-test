import React from "react";

const NewsCardSkeleton = () => {
  return (
    <div className="group animate-pulse">
      {/* Mobile layout */}
      <div className="md:hidden">
        <div className="flex items-start gap-4 bg-[#0E0D13] py-4 px-0 border-b border-gray-700">
          <div className="w-[100px] h-[100px] bg-gray-700 rounded-md" />

          <div className="flex flex-col justify-between flex-1 pr-2 space-y-2">
            <div className="flex justify-between text-gray-500 text-xs">
              <div className="h-4 bg-gray-700 rounded w-1/3" />
              <div className="h-4 bg-gray-700 rounded w-1/4" />
            </div>
            <div className="space-y-1">
              <div className="h-5 bg-gray-700 rounded w-full" />
              <div className="h-5 bg-gray-700 rounded w-5/6" />
              <div className="h-5 bg-gray-700 rounded w-4/6" />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex flex-col gap-2 bg-[#0E0D13] p-4">
        <div className="w-full h-36 bg-gray-700 rounded-md" />
        <div className="flex justify-between text-xs text-gray-500">
          <div className="h-4 bg-gray-700 rounded w-1/3" />
          <div className="h-4 bg-gray-700 rounded w-1/4" />
        </div>
        <div className="space-y-1">
          <div className="h-5 bg-gray-700 rounded w-full" />
          <div className="h-5 bg-gray-700 rounded w-5/6" />
          <div className="h-5 bg-gray-700 rounded w-4/6" />
        </div>
      </div>
    </div>
  );
};

export default NewsCardSkeleton;
