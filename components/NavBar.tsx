"use client";

import { recursive } from "@/app/fonts";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { ModeToggle } from "./ToggleDarkMode";

function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:block w-full z-50 bg-background py-4 px-8 shadow-md fixed top-0">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h3 className={`${recursive.className} text-xl font-bold`}>
            KoolWilly.
          </h3>
        </Link>
        <div className="space-x-10 flex items-center">
          <ModeToggle />
          <Link href="/">
            {pathname === "/" ? (
              <Button>Home</Button>
            ) : (
              <Button variant="ghost">Home</Button>
            )}
          </Link>
          <Link href="/posts">
            {pathname.includes("/posts") ? (
              <Button>Posts</Button>
            ) : (
              <Button variant="ghost">Posts</Button>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
