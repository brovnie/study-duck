"use client";
import React, { useState } from "react";
import CustomLink from "../UI/Link";
import Logo from "../icons/Logo";
import Link from "next/link";

const Navigation = () => {
  const genericHamburgerLine = `h-1 w-8 my-1 rounded-full bg-dark transition ease transform duration-300`;
  const [isOpen, setIsOpen] = useState(false);
  return (
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
            <li className="px-1">
              <CustomLink href="/auth" text="Sign In" variant="secondary" />
            </li>
            <li className="px-1">
              <CustomLink href="/auth?signup=true" text="Sign Up" />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
