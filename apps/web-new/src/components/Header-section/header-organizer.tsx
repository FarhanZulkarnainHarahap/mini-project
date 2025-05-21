"use client";

import Link from "next/link";
// import Image from "next/image";
import { useState } from "react";
import Image from "next/image";

import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import { FaRegUser } from "react-icons/fa";

export default function HeaderOrganizer() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [showProfilePopup, setShowPorfilePopup] = useState(false);

  const navItems = [
    { href: "/organizer", label: "Dashboard" },
    { href: "/organizer/event", label: "Event" },
    { href: "/organizer/transaction", label: "Transaction" },
    {
      href: "#profile",
      label: (
        <span
          className="flex items-center gap-1 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            setShowPorfilePopup(!showProfilePopup);
          }}
        >
          <FaRegUser className="text-lg" />
        </span>
      ),
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#191717] border-b border-gray-700 text-white shadow-md">
      <div className="max-w-full mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-5">
            {/* <Image
              src="/iconsayapkiri.svg"
              alt="Logo sayap kiri"
              fill
              className="object-contain"
            /> */}
          </div>
          <span className="text-xl font-bold">NexTime</span>
          <div className="relative w-8 h-5">
            {/* <Image
              src="/iconsayapkanan.svg"
              alt="Logo sayap kanan"
              fill
              className="object-contain"
            /> */}
          </div>
        </div>

        {showProfilePopup && (
          <div className="absolute bg-[#191717]  text-white p-4 shadow-xl w-[30%] min-h-screen z-99 top-0 bottom-0 right-0 grid grid-rows-[auto_1fr] gap-y-2">
            {showProfilePopup && (
              <div
                className="text-black cursor-pointer w-fit h-fit "
                onClick={(e) => {
                  e.preventDefault();
                  setShowPorfilePopup(!showProfilePopup);
                }}
              >
                <AiOutlineClose color="white" />
              </div>
            )}

            <div className=" h-full w-full grid grid-rows-2 place-items-center gap-5">
              <div className="grid place-items-center gap-y-5 ">
                <div className="relative size-40">
                  <Image
                    src="/Farhan.jpg"
                    alt=""
                    fill
                    className="object-contain rounded-full "
                  />
                </div>
                <div>
                  <p>Farhan Zulkarnaen Harahap</p>
                </div>
              </div>
              <div className=" grid grid-rows-[auto_auto_auto_auto_1fr] gap-y-5">
                <div className="w-full bg-red-800 text-center rounded-4xl p-3">
                  <Link href="/transaction">Transaction</Link>
                </div>
                <div className="bg-red-500 w-full text-center rounded-4xl p-3">
                  <Link href="/history">History</Link>
                </div>
                <div className="bg-red-500 w-full text-center rounded-4xl p-3">
                  <Link href="#SignIn">SignIn</Link>
                </div>
                <div className="bg-red-500 w-full text-center rounded-4xl p-3">
                  <Link href="#signOut">SingOut</Link>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* height: 100vh; top: 0; bottom: 0; right: 0; */}
        {/* Desktop Nav */}
        <nav
          className="hidden md:flex gap-6 items-center"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-gray-300 transition duration-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav
          className="md:hidden w-[95%] mx-auto mt-2 bg-[#1f1f1f] rounded-xl border border-gray-600 p-4 shadow-lg mb-4"
          aria-label="Mobile Navigation"
        >
          <ul className="flex flex-col gap-4 pb-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block w-full rounded-md px-3 py-2 transition duration-300 hover:bg-gray-700 hover:text-gray-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
