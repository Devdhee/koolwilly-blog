import Link from "next/link";

function NavBar() {
  return (
    <nav className="w-full z-50 bg-background py-6 px-8 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">KoolWilly.</Link>
        <div className="space-x-10">
          <Link href="/">Home</Link>
          <Link href="/blogs">Blogs</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
