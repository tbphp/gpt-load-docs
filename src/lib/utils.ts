import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatStars(stars: number): string {
  if (stars < 1000) {
    return stars.toString();
  }
  return `${(stars / 1000).toFixed(1)}k`;
}
