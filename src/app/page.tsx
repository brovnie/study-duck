"use client";
import Logo from "@/components/icons/Logo";
import CardSwap, { Card } from "@/components/UI/CardSwap";
import CustomLink from "@/components/UI/Link";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const genericHamburgerLine = `h-1 w-8 my-1 rounded-full bg-dark transition ease transform duration-300`;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="font-mono h-screen">
      <div className="bg-white sticky top-0 z-30">
        <header className="h-[50px] flex items-center justify-between container px-5 md:px-0 mx-auto">
          <Link href="/">
            <Logo />
          </Link>
          <div className="flex md:hidden items-center z-40">
            <button
              className="flex flex-col bg-white h-10 w-10 justify-center items-center group -scale-80"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div
                className={`${genericHamburgerLine} ${
                  isOpen
                    ? "rotate-45 translate-y-3 group-hover:opacity-100"
                    : " group-hover:opacity-100"
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isOpen ? "opacity-0" : " group-hover:opacity-100"
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isOpen
                    ? "-rotate-45 -translate-y-3 group-hover:opacity-100"
                    : " group-hover:opacity-100"
                }`}
              />
            </button>
          </div>
          <nav
            className={`md:flex h-screen md:h-auto  md:static  w-full md:w-auto items-center justify-center ${
              isOpen ? "flex bg-white z-20 absolute top-0 right-0" : "hidden"
            }`}
          >
            <ul className="flex md:flex-row flex-col gap-5 md:gap-2 items-center h-full w-full flex-1 justify-center">
              <li onClick={() => setIsOpen(false)}>
                <Link
                  href="/"
                  className="text-2xl md:text-base px-2 py-1 hover:border-b-2  border-b-amber-300"
                >
                  Home
                </Link>
              </li>
              <li onClick={() => setIsOpen(false)}>
                <a
                  href="#about"
                  className="text-2xl md:text-base px-2 py-1 hover:border-b-2  border-b-amber-300"
                >
                  About
                </a>
              </li>
              <li onClick={() => setIsOpen(false)}>
                <a
                  href="#contact"
                  className="text-2xl md:text-base px-2 py-1 hover:border-b-2  border-b-amber-300"
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

        <div className="relative w-full h-[300px] md:h-screen bg-amber-300 md:bg-transparent">
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
