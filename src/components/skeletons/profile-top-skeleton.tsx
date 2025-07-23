export const ProfileTopSkeleton = ({ moreInfos = false }: { moreInfos?: boolean }) => {

  return (
    <div className={`flex justify-between items-start animate-pulse ${moreInfos ? 'md:justify-around gap-5 md:gap-10' : ''}`}>
      {/* Seguidores */}
      <div className="flex flex-col items-center gap-1">
        <div className="w-10 h-4 bg-muted rounded" />
        <div className="w-16 h-3 bg-muted rounded" />
        {moreInfos &&
          <div className="mt-5 w-8 h-8 rounded-md bg-muted" />
        }
      </div>
      {/* Foto e nome */}
      <div className="flex flex-col items-center gap-2">
        <div className={`${moreInfos ? 'w-32 h-32 md:w-36 md:h-36' : 'w-28 h-28'} mx-auto -mt-16 mb-4 rounded-xl bg-muted`} />
        <div className="w-24 h-4 bg-muted rounded" />
        <div className="w-20 h-3 bg-muted rounded" />
        {moreInfos &&
          <div className="flex flex-col gap-3 mt-4 w-full items-center">
            <div className="space-y-1 w-48">
              <div className="h-3 bg-muted rounded w-1/2" />
              <div className="h-8 bg-muted rounded" />
            </div>
            <div className="space-y-1 w-48">
              <div className="h-3 bg-muted rounded w-1/3" />
              <div className="h-8 bg-muted rounded" />
            </div>
          </div>
        }
      </div>
      {/* Seguindo */}
      <div className="flex flex-col items-center gap-1">
        <div className="w-10 h-4 bg-muted rounded" />
        <div className="w-16 h-3 bg-muted rounded" />
        {moreInfos &&
          <div className="mt-5 w-8 h-8 rounded-md bg-muted" />
        }
      </div>
    </div>
  );
};
