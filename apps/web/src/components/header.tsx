import * as Button from "@simera-trace/ui/components/button";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="relative flex w-full items-center justify-between gap-6 border-stroke-soft-200 border-b bg-bg-white-0 px-6 py-4.5 pl-4.5 sm:h-16 lg:h-18 lg:px-11 lg:py-5">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row lg:gap-6">
        <Link className="flex items-center" href="/">
          <Image
            src="/Simera-Trace-Logo-Purple.png"
            alt="Simera Trace Logo"
            width={180}
            height={180}
          />
        </Link>

        <nav aria-label="Primary">
          <ul className="flex items-center gap-1">
            <li className="list-none">
              <Button.Root size="small" variant="neutral" mode="ghost" asChild>
                <Link href="/">Home</Link>
              </Button.Root>
            </li>
            <li className="list-none">
              <Button.Root size="small" variant="neutral" mode="ghost" asChild>
                <Link href="/about">About</Link>
              </Button.Root>
            </li>

            <li className="list-none">
              <Button.Root size="small" variant="neutral" mode="ghost" asChild>
                <Link href="/contact">Contact</Link>
              </Button.Root>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
