"use client";

import ProfileHeaderPopUp from "./menu-components/profile-components/profile-header-components";
import CartHeaderPopUp from "./menu-components/cart-components/cart-header-component";
import HomeMenu from "./menu-components/home-components/home-components";
import EventMenu from "./menu-components/event-components/event-component";
import AboutMenu from "./menu-components/about-components/about-component";
import ContactMenu from "./menu-components/contact-components/contact-component";
import MobileMenu from "./mobile-menu-component/mobile-menu-component";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#191717] border-b border-gray-700 text-white shadow-md">
      <div className="relative max-w-full mx-auto flex items-center px-6 py-4">
        {/* Logo */}
        <div className="text-xl font-bold">NexTime</div>

        {/* Nav menu - positioned absolutely in center */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center gap-8">
          <HomeMenu />
          <EventMenu />
          <AboutMenu />
          <ContactMenu />
        </nav>

        {/* Cart & Profile - stays on far right */}
        <div className="ml-auto hidden md:flex items-center gap-4">
          <CartHeaderPopUp />
          <ProfileHeaderPopUp />
        </div>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </header>
  );
}
