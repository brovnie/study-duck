import Logo from "@/components/icons/Logo";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-mono container mx-auto">
      <header className="h-[50px] flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <nav>
          <ul className="flex flex-row gap-2">
            <li>
              <Link
                href="/"
                className="px-2 py-1 hover:border-b-2  border-b-amber-300"
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="#about"
                className="px-2 py-1 hover:border-b-2  border-b-amber-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="px-2 py-1 hover:border-b-2  border-b-amber-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start"></main>
    </div>
  );
}
