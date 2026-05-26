import * as Button from "@simera-trace/ui/components/button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="relative flex h-16 w-full items-center justify-between gap-6 border-stroke-soft-200 border-b bg-bg-white-0 px-6 py-4.5 pl-4.5 lg:h-18 lg:px-11 lg:py-5">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 lg:gap-6">
        <Link className="flex items-center" href="/">
          <svg
            fill="none"
            height="28"
            aria-label="Simera Trace Logo"
            viewBox="0 0 28 28"
            width="28"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-primary-base"
              d="M14 9.33333L10.0333 7V2.33333L14 0L17.9667 2.33333V7L14 9.33333Z"
            />
            <path
              className="fill-primary-base"
              d="M21.9333 14L17.9667 11.6667V7L21.9333 4.66667L25.9 7V11.6667L21.9333 14Z"
            />
            <path
              className="fill-primary-base"
              d="M17.9667 21V16.3333L21.9333 14L25.9 16.3333V21L21.9333 23.3333L17.9667 21Z"
            />
            <path
              className="fill-primary-base"
              d="M10.0333 21L14 18.6667L17.9667 21V25.6667L14 28L10.0333 25.6667V21Z"
            />
            <path
              className="fill-primary-base"
              d="M6.06667 14L10.0333 16.3333V21L6.06667 23.3333L2.10001 21V16.3333L6.06667 14Z"
            />
            <path
              className="fill-primary-base"
              d="M6.06667 14L10.0333 11.6667V7L6.06667 4.66667L2.10001 7V11.6667L6.06667 14Z"
            />
          </svg>
        </Link>
        <nav aria-label="Primary" className="hidden lg:block">
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
                <Link href="/case-studies">Case Studies</Link>
              </Button.Root>
            </li>
            <li className="list-none">
              <Button.Root size="small" variant="neutral" mode="ghost" asChild>
                <Link href="/contact">Contact</Link>
              </Button.Root>
            </li>
          </ul>
        </nav>
        <Button.Root size="small" mode="lighter" asChild>
          <Link href="/">Request a trial</Link>
        </Button.Root>
      </div>
    </header>
  );
};
export default Header;
