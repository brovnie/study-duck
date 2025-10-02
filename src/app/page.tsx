"use client";
import Logo from "@/components/icons/Logo";
import CustomButton from "@/components/UI/Button";
import CardSwap, { Card } from "@/components/UI/CardSwap";
import CustomLink from "@/components/UI/Link";
import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-mono h-screen">
      <div className="bg-white sticky">
        <header className="h-[50px] flex items-center justify-between container px-5 md:px-0 mx-auto">
          <Link href="/">
            <Logo />
          </Link>
          <nav>
            <ul className="flex flex-row gap-2 items-center">
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
              <li className="px-2">
                <CustomLink href="/auth" text="Sign In" />
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <main className="flex md:flex-row flex-col container mx-auto">
        <div className="flex flex-col gap-5 w-full md:w-2/3 h-[45vh] mb-5 md:h-screen items-center justify-center px-5 md:px-0">
          <h1 className="text-4xl md:text-5xl md:-mt-[50px]">
            Study Duck: Focus Together, Achieve More
          </h1>
          <p>
            Join real-time video study sessions, stay accountable, earn points,
            and unlock new study partners along the way.
          </p>
        </div>

        <div className="relative w-full h-[300px] md:h-screen relative bg-amber-300 md:bg-transparent">
          <div className="hidden md:block absolute -top-20 -right-80 -z-10 bg-amber-300 rounded-full w-[150%] h-[120%]"></div>
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
          >
            <Card className="relative">
              <p className="text-white text-2xl font-bold">Card 1</p>
              <Image
                src="/images/Session.png"
                alt="studing girl"
                fill
                className="w-full h-full object-fill absolute"
              />
            </Card>
            <Card>
              <Image
                src="/images/studying-girl.png"
                alt="studing girl"
                fill
                className="w-full h-full object-fill absolute"
              />
            </Card>
            <Card>
              <Image
                src="/images/Video-chat.png"
                alt="studing girl"
                fill
                className="w-full h-full object-fill absolute"
              />
            </Card>
          </CardSwap>
        </div>
      </main>
    </div>
  );
}
