import Navbar from "@/components/layout/Navbar";
import { auth } from "@/utils/auth";
import { redirect } from "next/navigation";

async function HomeLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session) {
    return redirect("/login");
  }
  return (
    <>
      <Navbar
        name={session?.user?.name}
        email={session?.user?.email}
        initials={session?.user?.name}
      />
      <main className="w-full max-w-7xl mx-auto sm:px-8 lg:px-8">
        {children}
      </main>
    </>
  );
}

export default HomeLayout;
