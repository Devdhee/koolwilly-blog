"use client";

import { HiMenuAlt3 } from "react-icons/hi";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { recursive } from "@/app/fonts";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./ToggleDarkMode";

function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="px-4 lg:hidden py-3 shadow-md fixed z-50 w-full top-0 bg-background">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h3 className={`${recursive.className} text-lg font-bold`}>
            KoolWilly.
          </h3>
        </Link>
        <div className="flex gap-4">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <HiMenuAlt3 className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="opacity-0">navigation menu</SheetTitle>
                <SheetDescription className="opacity-0"></SheetDescription>
              </SheetHeader>

              <div className="flex flex-col gap-10 py-12">
                <Link href="/">
                  <SheetClose className="w-full">
                    {pathname === "/" ? (
                      <Button className="w-full">Home</Button>
                    ) : (
                      <Button variant="ghost" className="w-full">
                        Home
                      </Button>
                    )}
                  </SheetClose>
                </Link>

                <Link href="/posts">
                  <SheetClose className="w-full">
                    {pathname.includes("/posts") ? (
                      <Button className="w-full">Posts</Button>
                    ) : (
                      <Button variant="ghost" className="w-full">
                        Posts
                      </Button>
                    )}
                  </SheetClose>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

export default MobileNav;
