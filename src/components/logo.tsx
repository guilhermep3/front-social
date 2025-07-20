import Image from "next/image"
import Link from "next/link"

export const LogoTxt = () => {

  return (
    <Link href={'/'} className="text-lg/[1.1] font-extrabold uppercase text-primary">
      <p>Front</p>
      <p>Social</p>
    </Link>
  )
}

export const Logo = () => {

  return (
    <Link href={'/'} className="w-fit inline-block">
      <Image src={'/front-social.png'} alt="logo front-social"
        width={64} height={64}
        className="w-10 h-10 sm:w-12 sm:h-12"
      />
    </Link>
  )
}