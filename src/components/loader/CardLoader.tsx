import React from "react";

const CardLoader = () => {
  return (
    <div className="w-full grid grid-cols-12 lg:hidden gap-4 animate-pulse p-4">
      <div className="col-span-12 md:col-span-6  bg-white bg-opacity-10 rounded-lg">
        <div className=" shadow-lg rounded-lg flex flex-col flex-grow">
          <div className="pb-4 px-4 pt-2 flex-col flex gap-y-4">
            <span className="self-end inline-block bg-white bg-opacity-20 py-2 px-[2px] animate-pulse"></span>
            <span className="w-[10rem] inline-block bg-white bg-opacity-20 py-[6px] animate-pulse"></span>
            <span className="inline-block bg-white bg-opacity-20 py-[16px] animate-pulse"></span>
            <div className="flex justify-between text-sm text-gray-500">
              <span className="w-[8rem] inline-block bg-white bg-opacity-20 py-[4px] animate-pulse"></span>
              <span className="w-[8rem] inline-block bg-white bg-opacity-20 py-[4px] animate-pulse"></span>
            </div>
          </div>
          <div className="flex justify-between p-4 border-t border-gray-100 border-opacity-20">
            <button className="bg-white bg-opacity-20 py-1 px-8 animate-pulse"></button>
            <button className="bg-white bg-opacity-20 py-1 px-8 animate-pulse"></button>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6  bg-white bg-opacity-10 rounded-lg">
        <div className=" shadow-lg rounded-lg flex flex-col flex-grow">
          <div className="pb-4 px-4 pt-2 flex-col flex gap-y-4">
            <span className="self-end inline-block bg-white bg-opacity-20 py-2 px-[2px] animate-pulse"></span>
            <span className="w-[10rem] inline-block bg-white bg-opacity-20 py-[6px] animate-pulse"></span>
            <span className="inline-block bg-white bg-opacity-20 py-[16px] animate-pulse"></span>
            <div className="flex justify-between text-sm text-gray-500">
              <span className="w-[8rem] inline-block bg-white bg-opacity-20 py-[4px] animate-pulse"></span>
              <span className="w-[8rem] inline-block bg-white bg-opacity-20 py-[4px] animate-pulse"></span>
            </div>
          </div>
          <div className="flex justify-between p-4 border-t border-gray-100 border-opacity-20">
            <button className="bg-white bg-opacity-20 py-1 px-8 animate-pulse"></button>
            <button className="bg-white bg-opacity-20 py-1 px-8 animate-pulse"></button>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6  bg-white bg-opacity-10 rounded-lg">
        <div className=" shadow-lg rounded-lg flex flex-col flex-grow">
          <div className="pb-4 px-4 pt-2 flex-col flex gap-y-4">
            <span className="self-end inline-block bg-white bg-opacity-20 py-2 px-[2px] animate-pulse"></span>
            <span className="w-[10rem] inline-block bg-white bg-opacity-20 py-[6px] animate-pulse"></span>
            <span className="inline-block bg-white bg-opacity-20 py-[16px] animate-pulse"></span>
            <div className="flex justify-between text-sm text-gray-500">
              <span className="w-[8rem] inline-block bg-white bg-opacity-20 py-[4px] animate-pulse"></span>
              <span className="w-[8rem] inline-block bg-white bg-opacity-20 py-[4px] animate-pulse"></span>
            </div>
          </div>
          <div className="flex justify-between p-4 border-t border-gray-100 border-opacity-20">
            <button className="bg-white bg-opacity-20 py-1 px-8 animate-pulse"></button>
            <button className="bg-white bg-opacity-20 py-1 px-8 animate-pulse"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLoader;
