import * as React from "react"; import { cn } from "../utils";
type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & { variant?: "default" | "secondary" };
export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const styles = variant === "secondary" ? "bg-slate-100 text-slate-700 border border-slate-200" : "bg-slate-900 text-white";
  return <span className={cn("inline-flex items-center px-2.5 py-1 rounded-xl text-xs font-medium", styles, className)} {...props}/>;
}
