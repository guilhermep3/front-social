"use client"
import { InputIcon } from "@/components/input-icon";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { containerStyle, flexCenter } from "@/utils/styles";
import { Lock, Mail, User, UserPlus } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();
  function handleSubmit() {
    router.push('/home');
  }

  return (
    <div className={`${containerStyle} ${flexCenter} w-full h-screen`}>
      <div className={`${flexCenter} flex-col md:flex-row md:h-[640px] md:bg-background md:border border-muted-foreground rounded-3xl overflow-hidden`}>
        <form className={`${flexCenter} flex-col gap-6 h-full p-5 lg:p-8`} onSubmit={handleSubmit}>
          <Logo />
          <div className={`${flexCenter} flex-col gap-1`}>
            <h1 className="text-xl md:text-2xl font-bold">
              {isLogin ? "Bem-vindo(a) de volta" : "Bem-vindo(a) à Front Social"}
            </h1>
            <p>{isLogin ? "Acesse sua conta" : "Crie sua conta para acessar nosso site"}</p>
          </div>
          <div className={`${flexCenter} flex-col gap-3`}>
            {!isLogin && (
              <>
                <InputIcon Icon={UserPlus} placeholder="Nome completo" className="w-64" />
                <InputIcon Icon={User} placeholder="Nome de usuário" className="w-64" />
              </>
            )}
            <InputIcon Icon={Mail} placeholder="Email" className="w-64" />
            <InputIcon Icon={Lock} placeholder="Senha" className="w-64" />
            {isLogin ? (
              <div className="flex justify-between items-center w-full">
                <div className={`${flexCenter} gap-2`}>
                  <Checkbox id="privacy" className="border-muted-foreground" />
                  <Label htmlFor="privacy" className="cursor-pointer">
                    Lembrar de mim
                  </Label>
                </div>
                <p className="text-sm text-blue-800 dark:text-blue-500 hover:underline cursor-pointer">Esqueceu a senha ?</p>
              </div>
            ) : (
              <div className="flex justify-between items-center w-full">
                <div className={`${flexCenter} gap-2`}>
                  <Checkbox id="privacy" className="border-muted-foreground" />
                  <Label htmlFor="privacy">
                    Eu aceito os{" "}
                    <strong className="hover:underline cursor-pointer -ml-[2px]">
                      termos de política e privacidade
                    </strong>
                  </Label>
                </div>
              </div>
            )}
          </div>
          <div className={`${flexCenter} flex-col gap-3 w-full`}>
            <Button type="submit"
              size="lg"
              className="w-full h-12 bg-primary text-lg text-white rounded-full cursor-pointer"
            >
              {isLogin ? "Entrar" : "Cadastrar"}
            </Button>
            {!isLogin &&
              <Button type="button"
                size={"lg"}
                className="bg-background hover:bg-muted text-base text-foreground border border-muted-foreground w-full h-12 rounded-full cursor-pointer">
                <img src="google-logo.svg" alt="logo google" className="w-5 h-5" />
                Cadastre-se com Google
              </Button>
            }
          </div>
          <div className="text-sm mt-2">
            {isLogin ? "Não tem uma conta? " : "Já tem uma conta? "}
            <button
              type="button"
              className="text-blue-800 dark:text-blue-500 font-semibold hover:underline cursor-pointer"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Cadastrar" : "Entrar"}
            </button>
          </div>
        </form>
        <div className="hidden md:block h-full">
          <Image src="/register.jpg" alt="register"
            width={400} height={800}
            className="h-full object-cover"
          />
        </div>
      </div>
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
    </div>
  );
}
