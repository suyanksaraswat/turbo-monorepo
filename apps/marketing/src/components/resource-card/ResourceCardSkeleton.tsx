export function ResourceCardSkeleton() {
  return (
    <div className="animate-pulse flex flex-col items-start justify-between">
      <div className="relative w-full">
        <div className="aspect-[16/9] w-full rounded-2xl bg-gray-200 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"></div>
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div className="max-w-xl w-full">
        <div className="mt-8 flex items-center gap-x-4 text-xs w-full">
          <div className="w-36 h-5 bg-gray-200 rounded-md"></div>
          <div className="relative z-10 rounded-full bg-gray-200 px-3 py-1.5 h-5 w-24"></div>
        </div>
        <div className="group relative">
          <div
            id="this-here"
            className="mt-4 bg-gray-200 rounded-md w-full h-8"></div>

          <div className="mt-5 leading-6 flex flex-col gap-1">
            <div className="h-5 w-full bg-gray-200 rounded-md"></div>
            <div className="h-5 w-full bg-gray-200 rounded-md"></div>
            <div className="h-5 w-full bg-gray-200 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
