import { useEffect, useState } from "react";

type props = {
  time: number;
}
export const PostTime = ({ time }: props) => {
  const [formattedTime, setFormattedTime] = useState<string>("");

  useEffect(() => {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;

    if (!hours) {
      setFormattedTime(`${minutes} min.`)
    } else if (hours === 1) {
      setFormattedTime(`${hours} hora`)
    } else if (hours && minutes < 30) {
      setFormattedTime(`${hours} horas`)
    } else {
      setFormattedTime(`${hours} horas e ${minutes} min.`)
    }

  }, [])

  return (
    <div className="text-xs md:text-sm text-muted-foreground">
      {formattedTime}
    </div>
  )
}