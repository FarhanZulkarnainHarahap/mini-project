import ProfileHeaderPopUp from "../menu-components/profile-components/profile-header-components";
import CartHeaderPopUp from "../menu-components/cart-components/cart-header-component";
import HomeMenu from "../menu-components/home-components/home-components";
import EventMenu from "../menu-components/event-components/event-component";
import AboutMenu from "../menu-components/about-components/about-component";
import ContactMenu from "../menu-components/contact-components/contact-component";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="md:hidden ml-auto relative">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-white text-2xl z-50 relative"
        aria-label="Toggle navigation"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {menuOpen && (
        <div className="absolute top-14 right-0 w-64 bg-[#1f1f1f] rounded-xl border border-gray-600 p-6 shadow-2xl z-40">
          <ul className="flex flex-col gap-6 text-white text-lg">
            <HomeMenu />
            <EventMenu />
            <AboutMenu />
            <ContactMenu />
            <div className="border-t border-gray-700 pt-4 flex flex-col gap-4">
              <CartHeaderPopUp />
              <ProfileHeaderPopUp />
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}
