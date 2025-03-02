import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <div className="w-full max-w-5xl mx-auto p-6 space-y-6 mt-15">
      {/* Title Skeleton */}

      <div className="flex items-center mt-10">
        <Skeleton className="h-8 w-40" />
      </div>
      <div className="flex justify-start gap-10  items-center mt-10">
        <Skeleton className="h-8 w-40" />
        <Skeleton className="h-8 w-40" />
      </div>

      {/* Input Fields Skeleton */}
      <div className="grid md:grid-cols-3 mt-10 gap-6">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>

      {/* User Details & Amount Skeleton */}
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>

      {/* Note Section Skeleton */}
      <Skeleton className="h-24 w-3/4 mt-10" />

      {/* Submit Button Skeleton */}
      <div className="flex items-center justify-center mt-10">
        <Skeleton className="h-12 w-40" />
      </div>
    </div>
  );
}
