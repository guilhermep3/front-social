import { ForwardRefExoticComponent } from "react";
import { LucideProps } from "lucide-react";
type props = {
  Icon: ForwardRefExoticComponent<Omit<LucideProps, "ref">>;
  label?: string;
  className?: string;
}
export const ButtonIcon = ({ Icon, label, className }: props) => {

  return (
    <button
      className={`flex justify-center items-center gap-2 bg-muted text-sm md:text-base cursor-pointer border border-border
        ${label ? 'rounded-xl px-3 py-1' : 'w-9 h-9 rounded-lg'}
      ${className}
    `}>
      <Icon className={`text-primary w-6 h-6`}/>
      {label}
    </button>
  )
}