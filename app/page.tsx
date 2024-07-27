import { auth } from "@/utils/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (!session) {
    return redirect("/login");
  } else {
    return redirect("/home");
  }
  return <h1>{session?.user?.name}</h1>;
}
