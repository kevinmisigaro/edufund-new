import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonCard() {
  return (
    <div className="h-auto lg:h-60  md:max-w-xl w-full transition ease-in-out cursor-pointer px-4 py-6 rounded-xl">
      <Skeleton className="h-[125px] w-[320px] rounded-xl" />
      <div className="space-y-2 mt-4">
        <Skeleton className="h-4 w-[280px]" />
        <Skeleton className="h-4 w-[280px] md:w-[220px]" />
      </div>
    </div>
  )
}
