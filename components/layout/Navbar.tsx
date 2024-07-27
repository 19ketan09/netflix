"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import { usePathname } from "next/navigation";
import { Search, Bell } from "lucide-react";
import UserNav from "./UserNav";

interface linkProps {
  name: string;
  url: string;
}

const links: linkProps[] = [
  { name: "Home", url: "/home" },
  { name: "TV Shows", url: "/home/shows" },
  { name: "Movies", url: "/home/movies" },
  { name: "Recently Added", url: "/home/recently" },
  { name: "My List", url: "/home/user/list" },
];

const Navbar: React.FC<{
  name?: string | null;
  email?: string | null;
  initials?: string | null;
}> = ({ name, email, initials }) => {
  const pathname = usePathname();
  return (
    <div className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
      <div className="flex items-center">
        <Link href={"/home"} className="w-32">
          <Image src={Logo} alt="logo" className="" priority />
        </Link>
        <ul className="lg:flex gap-x-4 ml-14 hidden">
          {links.map((link, idx) => (
            <div className="" key={idx}>
              {pathname === link.url ? (
                <li>
                  <Link
                    href={link.url}
                    className="text-red-500 underline font-semibold text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    href={link.url}
                    className="text-gray-300 font-normal text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              )}
            </div>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-x-8">
        <Search className="w-7 h-7 text-gray-300 cursor-pointer p-1 rounded hover:bg-muted/70" />
        <Bell className="w-7 h-7 text-gray-300 cursor-pointer p-1 rounded hover:bg-muted/70" />
        <UserNav name={name} email={email} initials={initials} />
      </div>
    </div>
  );
};

export default Navbar;
