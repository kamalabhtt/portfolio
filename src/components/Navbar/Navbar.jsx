import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close mobile menu after click
    }
  };

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "Footer", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 px-6 md:px-20 py-3 md:py-4 flex justify-between items-center text-white bg-[#465697] shadow-md transition-all duration-300">
      {/* Logo */}
      <span className="text-xl md:text-2xl font-bold tracking-wide">Portfolio</span>

      {/* Menu Items */}
      <ul
        className={`${
          menuOpen ? "block" : "hidden"
        } md:flex md:items-center gap-4 absolute md:static top-full left-0 w-full md:w-auto bg-[#465697] md:bg-transparent px-4 py-4 md:p-0 text-center`}
      >
        {menuItems.map((item) => (
          <li
            key={item.id}
            className="cursor-pointer px-4 py-2 md:py-0 rounded-3xl hover:bg-[#374c8a] transition-all duration-300"
            onClick={() => handleScrollTo(item.id)}
          >
            {item.label}
          </li>
        ))}

        {/* Download CV */}
        <a href="/cv" download>
          <li className="mt-3 md:mt-0 px-6 py-3 rounded-3xl bg-white text-[#465697] font-semibold text-base md:text-lg hover:bg-[#374c8a] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95">
            Download CV
          </li>
        </a>
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        {menuOpen ? (
          <RiCloseLine size={30} onClick={() => setMenuOpen(false)} />
        ) : (
          <RiMenu2Line size={30} onClick={() => setMenuOpen(true)} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
