import { ForwardRefExoticComponent } from "react";
import { Button } from "./ui/button"
import { LucideProps } from "lucide-react";
type props = {
  Icon: ForwardRefExoticComponent<Omit<LucideProps, "ref">>;
  label: string;
  className?: string;
}
export const ButtonIcon = ({ Icon, label, className }: props) => {

  return (
    <button
      className={`flex items-center gap-2 bg-muted text-sm md:text-base cursor-pointer px-3 py-1 rounded-xl border border-border ${className}
    `}>
      <Icon className="text-primary w-6 h-6"/>
      {label}
    </button>
  )
}