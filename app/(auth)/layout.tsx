import Image from "next/image";
import bgImg from "@/assets/home-bg.jpg";
import logo from "@/assets/logo.png";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      {children}
      <Image
        src={bgImg}
        alt="bg"
        priority
        fill
        quality={100}
        className="hidden sm:flex sm:object-cover -z-10 brightness-75"
      />
      <div className="absolute inset-0 bg-black/40 -z-10" />
      <Image
        alt="logo"
        src={logo}
        width={140}
        height={120}
        priority
        className="absolute top-4 left-4 object-contain md:left-10 md:top-6"
      />
    </div>
  );
}

export default AuthLayout;
