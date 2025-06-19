"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import Button from "./GetStartedButton";
import Image from "next/image";
export default function Navigation() {
  return (
    <nav className="bg-white/80  backdrop-blur-lg   border-gray-200 border-b  px-6 py-4 max-sm:px-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-12 max-lg:gap-8">
          <div className="flex gap-3 items-center">
            <Image
              src="/echofind-logo.svg"
              alt="CampusFind"
              width={120}
              height={40}
              className="max-sm:w-[100px] max-sm:h-[30px] max-lg:w-[120px] max-lg:h-[40px] hidden lg:block"
            />
            <Image
              src="/logo.svg"
              height={40}
              width={40}
              className="lg:hidden block"
              alt="echofind logo"
            />

            <div className="hidden max-lg:block">
              {/* <Link
              href={"/"}
              className="text-danger  font-[400] mr-6 max-sm:text-[14px] "
            >
              Home
            </Link>
            <Link
              href={"/"}
              className="text-foreground  font-[400] mr-6 max-sm:text-[14px]"
            >
              Browse
            </Link>
            <Link
              href={"/"}
              className="text-foreground bg-amber-100 font-[400] max-sm:text-[14px]"
            >
              Chat
            </Link> */}
              <Menu className="text-foreground cursor-pointer" size={50} />
            </div>
          </div>

          <div className="max-lg:hidden flex items-center gap-8">
            <Link
              href={"/"}
              className="text-foreground text-base font-[600] active:text-accent transition-colors hover:scale-102 hover:text-accent"
            >
              Home
            </Link>
            <Link
              href={"/Browse"}
              className="text-foreground text-base font-[600] hover:scale-102 hover:text-accent active:text-accent"
            >
              Browse
            </Link>
            <Link
              href={"/Dashboard"}
              className="text-foreground text-base font-[600] hover:scale-102 hover:text-accent active:text-accent"
            >
              Dashboard
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link href="/Register">
            <Button type="button" variant="cta" className="px-6 py-2">
              Join
            </Button>
          </Link>
          <Link href="/Login">
            <Button
              type="button"
              variant="secondary"
              className="px-6 py-2 hidden lg:block"
            >
              Login
            </Button>
          </Link>
        </div>
      </div>
    </nav>

    // <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-200">
    //   <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
    //     <img src="/echofind-logo.svg" alt="camp" />
    //     <div className="text-lg font-bold text-foreground">EchoFind</div>

    //     {/* Nav Links */}
    //     <div className="hidden md:flex gap-6 text-sm font-medium text-echoblack">
    //       <a href="#" className="hover:text-foreground transition">
    //         Lost Items
    //       </a>
    //       <a href="#" className="hover:text-foreground transition">
    //         Found Items
    //       </a>
    //       <a href="#" className="hover:text-foreground transition">
    //         Report
    //       </a>
    //     </div>

    //     {/* CTA */}
    //     <button className="ml-6 bg-foreground text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition">
    //       Sign In
    //     </button>
    //   </nav>
    // </header>
  );
}
