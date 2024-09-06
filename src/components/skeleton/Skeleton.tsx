const Skeleton = () => {
  return (
    <div className="hidden w-full max-w-6xl animate-pulse lg:flex flex-col justify-center space-y-4 p-4">
      <div className="h-10 bg-white bg-opacity-10 rounded w-full"></div>
      <div className="flex justify-between gap-10">
        <div className="h-8 bg-white bg-opacity-10 rounded w-1/2"></div>
        <div className="h-8 bg-white bg-opacity-10 rounded w-1/2"></div>
      </div>
      <div className="flex justify-between gap-10">
        <div className="h-8 bg-white bg-opacity-10 rounded w-3/4"></div>
        <div className="h-8 bg-white bg-opacity-10 rounded w-1/4"></div>
      </div>
     {/*  <div className="h-4 bg-gray-200 bg-opacity-50 rounded w-5/6"></div> */}
      <div className="h-8 bg-white bg-opacity-10 rounded w-full"></div>
    </div>
  );
};

export default Skeleton;
