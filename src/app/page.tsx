import { Logo } from "@/components/logo";
import { flexCenter } from "@/utils/styles";
import { redirect } from "next/navigation";

export default function Home() {

  redirect('/home');

  return (
    <div className={flexCenter+" w-full h-screen pt-24"}>
      <Logo/>
    </div>
  );
}
