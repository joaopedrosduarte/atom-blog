import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

//lib usada para juntar classes do tailwind com classes do clsx, utilizada pelo shadcn
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
