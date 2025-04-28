export default function ProductSkeleton() {
  return (
    <div className="p-2 rounded-lg shadow bg-white animate-pulse flex flex-col  w-[180px] h-[250px] md:w-[200px] md:h-[280px] lg:w-[220px] lg:h-[300px] gap-4 justify-center">
      <div className="w-full h-3/4 flex justify-center">
        <div className="relative w-3/4 h-full rounded-md overflow-hidden bg-gray-300">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer" />
        </div>
      </div>
      <div className="w-full flex justify-start">
        <div className="relative bg-gray-300 h-4 rounded w-2/3 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer" />
        </div>
      </div>
      <div className="w-full flex justify-between">
        <div className="relative bg-gray-300 h-3 rounded w-1/4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer" />
        </div>
        <div className="relative bg-gray-300 h-3 rounded w-1/4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer" />
        </div>
      </div>
    </div>
  );
}
