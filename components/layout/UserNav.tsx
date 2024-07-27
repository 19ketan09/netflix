"use client";
import { signOut } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "../ui/dropdown-menu";

const UserNav: React.FC<{
  initials?: string | null;
  name?: string | null;
  email?: string | null;
}> = ({
  initials = "JD",
  name = "John Doe",
  email = "johhndoe945@gmail.com",
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} className="w-10 h-10 relative rounded-sm">
          <Avatar className="w-10 h-10 rounded-sm">
            <AvatarImage src="https://mlmkqunimbdefmqmwxjd.supabase.co/storage/v1/object/public/user%20image/avatar.jpg" />
            <AvatarFallback className="rounded-sm">
              {initials?.split(" ")[0]}
              {initials?.split(" ")[1]}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel>
          <div className="flex flex-col gap-1">
            <h1 className="text-sm font-medium leading-none">{name}</h1>
            <p className="text-xs leading-none text-muted-foreground">
              {email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserNav;
