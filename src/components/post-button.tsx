"use client"
import { LucideProps } from "lucide-react"
import { ForwardRefExoticComponent, useState } from "react"

type props = {
  Icon: ForwardRefExoticComponent<Omit<LucideProps, "ref">>;
  quantity?: number;
  color: 'red' | 'green' | 'blue' | 'default';
  small?: boolean;
}
export const PostButton = ({ Icon, quantity, color, small }: props) => {
  const [clicked, setClicked] = useState(false);

  return (
    <button
      onClick={() => setClicked(prev => !prev)}
      className={`flex items-center gap-2 transition duration-200 text-foreground cursor-pointer
      ${color === 'red' && 'hover:text-red-600'}
      ${color === 'green' && 'hover:text-green-600'}
      ${color === 'blue' && 'hover:text-blue-600'}
      ${color === 'default' && 'hover:text-foreground'}
      ${small && 'text-xs md:text-sm'}
    `}>
      <Icon className={`
        ${clicked && color === 'red' && 'text-red-700 fill-red-600'}
        ${small && 'w-5 h-5'}
      `} />
      {quantity}
    </button>
  )
}