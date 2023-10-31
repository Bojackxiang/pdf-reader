"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { LINKS } from "@/constants/links";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";

interface NavBarProps {}

const NavBar = ({}: NavBarProps) => {
  const params = useParams();
  const router = useRouter();

  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="h-14 flex items-center justify-between border-b border-zinc-200">
          <Link href={"/"} className="font-semibold flex z-40">
             <span>Reader</span>
          </Link>

          {/* mobile nav bar */}

          {/*  */}
          <div className="hidden items-centers space-x-4 sm:flex">
            <Link
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
              href={LINKS.pricing.link}
            >
              {LINKS.pricing.name}
            </Link>
            <LoginLink
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >Sign In</LoginLink>
            <LoginLink
              className={buttonVariants({
                size: "sm",
              })}
            >Get Started</LoginLink>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default NavBar;
