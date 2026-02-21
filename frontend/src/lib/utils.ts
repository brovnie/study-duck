import { levels } from "@/data/levels";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatMinutesToHours = (totalMinutes: number) => {
  if (!Number.isFinite(totalMinutes)) return "N/A";
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours === 0) return `${minutes}m`;
  if (minutes === 0) return `${hours}h`;
  return `${hours}h ${minutes}m`;
};

export const maxPoints = (currentPoints: number) => {
  if (!Number.isFinite(currentPoints)) return levels[0];

  const found = levels.find((lv) =>
    currentPoints < 300
      ? lv.points >= currentPoints && lv.level !== "gray"
      : lv.level === "purple"
  );

  return found || levels[0];
};
