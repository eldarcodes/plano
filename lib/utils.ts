import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const calculateLevelPadding = (level?: number, defaultSize = 12) => {
  let padding = defaultSize;

  if (level) {
    padding = level * defaultSize + 25;
  }

  return padding;
};
