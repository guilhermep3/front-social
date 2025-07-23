export const ProfileBottomSkeleton = ({ moreInfos = false, isEditing = false }: { moreInfos?: boolean, isEditing?: boolean }) => {
  
  return (
    <div className="w-full animate-pulse">
      {/* Texto inicial */}
      <div className="flex justify-center mt-4">
        <div className="h-4 w-60 bg-muted rounded" />
      </div>
      {/* Input de bio (modo edição com moreInfos) */}
      {moreInfos && isEditing && (
        <div className="mt-6 space-y-2 px-4 md:px-0">
          <div className="h-3 w-24 bg-muted rounded" />
          <div className="h-10 w-full bg-muted rounded" />
        </div>
      )}
      {/* Botão "Meu perfil" */}
      {!moreInfos && (
        <div className="mt-6 px-4 md:px-0">
          <div className="w-full h-10 bg-muted rounded-full" />
        </div>
      )}
      {/* Área inferior com Highlights e Tabs */}
      {moreInfos && (
        <div className="flex flex-col items-center gap-6 mt-6 px-4 md:px-10">
          {/* Descrição ou textarea */}
          {isEditing ? (
            <div className="w-full space-y-2">
              <div className="h-3 w-24 bg-muted rounded" />
              <div className="h-28 bg-muted rounded" />
            </div>
          ) : (
            <div className="h-4 w-48 bg-muted rounded" />
          )}
          {/* Destaques */}
          <div className="w-full h-28 bg-muted rounded" />
          {/* Tabs */}
          <div className="w-full h-12 bg-muted rounded" />
        </div>
      )}
    </div>
  );
};
