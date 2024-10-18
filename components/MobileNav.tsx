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

function MobileNav() {
  return (
    <nav className="px-4 lg:hidden py-4 shadow-sm fixed z-50 w-full top-0 bg-background">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">KoolWilly.</Link>
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
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default MobileNav;
