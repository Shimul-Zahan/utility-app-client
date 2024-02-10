import clsx from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs) => {
    return twMerge(clsx(...inputs)) // resolving tailwind classes conflicts
}