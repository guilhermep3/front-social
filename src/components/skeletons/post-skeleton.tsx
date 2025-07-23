"use client"
import { Card } from "@/components/ui/card";

export const PostSkeleton = () => {
  return (
    <Card className="p-4 md:p-6 animate-pulse space-y-4">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-muted rounded-lg" />
        <div className="flex flex-col gap-2 flex-1">
          <div className="w-1/3 h-4 bg-muted rounded" />
          <div className="w-1/4 h-3 bg-muted rounded" />
        </div>
        <div className="w-16 h-6 bg-muted rounded-md ml-auto" />
      </div>
      {/* Description */}
      <div className="space-y-2">
        <div className="h-4 bg-muted rounded w-full" />
        <div className="h-4 bg-muted rounded w-5/6" />
        <div className="h-4 bg-muted rounded w-2/3" />
      </div>
      {/* Image */}
      <div className="w-full h-60 bg-muted rounded" />
      {/* Footer buttons */}
      <div className="flex justify-around pt-2">
        <div className="w-6 h-6 bg-muted rounded-full" />
        <div className="w-6 h-6 bg-muted rounded-full" />
        <div className="w-6 h-6 bg-muted rounded-full" />
        <div className="w-6 h-6 bg-muted rounded-full" />
      </div>
      {/* Optional: Commentaries */}
      <div className="space-y-6 pt-6">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-muted rounded-lg" />
              <div className="flex flex-col gap-1 w-full">
                <div className="w-1/3 h-3 bg-muted rounded" />
                <div className="w-1/4 h-3 bg-muted rounded" />
              </div>
            </div>
            <div className="h-3 bg-muted rounded w-5/6" />
            <div className="flex gap-4 mt-2">
              <div className="w-4 h-4 bg-muted rounded-full" />
              <div className="w-4 h-4 bg-muted rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
