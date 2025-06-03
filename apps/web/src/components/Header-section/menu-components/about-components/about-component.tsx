"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AboutMenu() {
  const pathname = usePathname();
  const isActive = pathname === "/dashboard/customer/about";

  return (
    <Link
      href="/dashboard/customer/about"
      className={`relative font-medium transition-all duration-300 ease-in-out
        hover:scale-105 active:scale-95
        ${isActive ? "text-blue-400" : "text-white hover:text-blue-400"}
        after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300
        ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
      `}
    >
      About
    </Link>
  );
}
