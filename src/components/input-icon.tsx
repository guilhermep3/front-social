"use client"
import { ForwardRefExoticComponent, ReactNode, useRef } from "react"
import { Input } from "./ui/input"
import { LucideProps } from "lucide-react";

type props = {
  Icon: ForwardRefExoticComponent<Omit<LucideProps, "ref">>;
  placeholder: string;
  className?: string;
}
export const InputIcon = ({ Icon, placeholder, className }: props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  function focusOnInput() {
    inputRef.current?.focus();
  }

  return (
    <div
      className="flex items-center gap-2 px-3 py-1 bg-muted border border-zinc-400 dark:border-zinc-800 rounded-full focus-within:ring-2 focus-within:ring-primary"
      onClick={focusOnInput}
    >
      <Icon className="text-primary" />
      <Input
        ref={inputRef}
        className={`!bg-transparent !border-none !shadow-none !outline-none !ring-0 !ring-offset-0 focus-visible:!ring-0 focus-visible:!ring-offset-0 p-0 ${className}`}
        placeholder={placeholder}
      />
    </div>
  )
}