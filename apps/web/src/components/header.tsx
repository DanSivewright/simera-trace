import * as Button from "@simera-trace/ui/components/button";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="relative flex h-16 w-full items-center justify-between gap-6 border-stroke-soft-200 border-b bg-bg-white-0 px-6 py-4.5 pl-4.5 lg:h-18 lg:px-11 lg:py-5">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 lg:gap-6">
        <div className="flex items-center gap-4 lg:gap-6">
          <Link className="flex items-center" href="/">
            <Image
              src="/Simera-Trace-Logo-Black.png"
              alt="Simera Trace Logo"
              width={100}
              height={100}
            />
          </Link>
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              <li className="list-none">
                <Button.Root
                  size="small"
                  variant="neutral"
                  mode="ghost"
                  asChild
                >
                  <Link href="/">Home</Link>
                </Button.Root>
              </li>
              <li className="list-none">
                <Button.Root
                  size="small"
                  variant="neutral"
                  mode="ghost"
                  asChild
                >
                  <Link href="/about">About</Link>
                </Button.Root>
              </li>

              <li className="list-none">
                <Button.Root
                  size="small"
                  variant="neutral"
                  mode="ghost"
                  asChild
                >
                  <Link href="/contact">Contact</Link>
                </Button.Root>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Button.Root
            className="hidden md:flex"
            size="small"
            mode="lighter"
            asChild
          >
            <Link href="/">Request a trial</Link>
          </Button.Root>
          <Button.Root size="small" asChild>
            <Link href="/">
              <span className="hidden md:inline">Qualification </span>Assessment
            </Link>
          </Button.Root>
        </div>
      </div>
    </header>
  );
};
export default Header;
