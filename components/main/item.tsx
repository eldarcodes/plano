import { ChevronDown, ChevronRight, type LucideIcon } from "lucide-react";

import { Id } from "@/convex/_generated/dataModel";
import { calculateLevelPadding, cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface ItemProps {
  id?: Id<"documents">;
  documentIcon?: string;
  active?: boolean;
  expanded?: boolean;
  isSearch?: boolean;
  level?: number;

  label: string;
  icon: LucideIcon;

  onClick?: () => void;
  onExpand?: () => void;
}

export const Item = ({
  id,
  documentIcon,
  active,
  expanded,
  isSearch,
  level,
  label,
  icon: Icon,
  onExpand,
  onClick,
}: ItemProps) => {
  const ChevronIcon = expanded ? ChevronDown : ChevronRight;

  const levelPadding = calculateLevelPadding(level);

  const handleExpand = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();

    if (onExpand) onExpand();
  };

  return (
    <div
      role="button"
      onClick={onClick}
      style={{ paddingLeft: levelPadding }}
      className={cn(
        "group min-h-[27px] text-sm py-1 pr-3 w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium",
        active && "bg-primary/5 text-primary"
      )}
    >
      {!!id && (
        <div
          role="button"
          className="h-full rounded-sm hover:bg-neutral-300 dark:bg-neutral-600 mr-1"
          onClick={handleExpand}
        >
          <ChevronIcon className="h-4 w-4 shrink-0 text-muted-foreground/50" />
        </div>
      )}

      {documentIcon ? (
        <div className="shrink-0 mr-2 text-[18px]">{documentIcon}</div>
      ) : (
        <Icon className="shrink-0 h-[18px] mr-2 text-muted-foreground" />
      )}

      <span className="truncate">{label}</span>

      {isSearch && (
        <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      )}
    </div>
  );
};

Item.Skeleton = function ItemSkeleton({ level }: { level?: number }) {
  const levelPadding = calculateLevelPadding(level);

  return (
    <div
      style={{ paddingLeft: levelPadding }}
      className="flex gap-x-2 py-[3px]"
    >
      <Skeleton className="h-4 w-4" />
      <Skeleton className="h-4 w-[30px]" />
    </div>
  );
};
