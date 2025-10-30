import React from "react";
import { NavLink } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { HashLink } from "react-router-hash-link";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/sell", label: "Sell" },
    { to: "/jobs", label: "Jobs" },
    { to: "#about", label: "About" },
  ];

  const [isSideBarOpen, setIsSideBarOpen] = React.useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    if (!isSideBarOpen) {
      tl.from(
        ".navbar-wrapper",
        {
          x: -100,
          duration: 3,
        },
        "-=1"
      );
    }
  }, [isSideBarOpen]);

  return (
    <nav className="navbar-wrapper">
      {/* Toggle Button (Sword / Cross) */}
      <div
        onClick={() => setIsSideBarOpen(!isSideBarOpen)}
        className="absolute -top-5 -right-8 cursor-pointer z-20"
      >
        {isSideBarOpen ? (
          <Icon icon="mingcute:plus-line" width="40" height="40" className="text-[#af601f]" />
        ) : (
          <Icon icon="game-icons:crossed-swords" width="40" height="40" className="text-[#af601f]" />
        )}
      </div>

      {/* Sidebar Panel (only shown when open) */}
      {!isSideBarOpen && (
        <div className="navbar">
          <ul className="nav-link">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.to.startsWith("#") ? (
                  // For section links like About or Contact, just show text, no icon
                  <HashLink
                    smooth
                    to={'/' + link.to}
                    className="block w-full text-center px-2 py-1 hover:text-[#8B5E3C] font-bold"
                    onClick={() => setIsSideBarOpen(false)}
                  >
                    {link.label}
                  </HashLink>
                ) : (
                  // For normal page links, show NavLink with gun icon if active
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `block w-full text-center px-2 py-1 hover:text-[#8B5E3C] ${
                        isActive ? "font-extrabold text-[#8B5E3C]" : ""
                      }`
                    }
                    onClick={() => setIsSideBarOpen(false)}
                  >
                    {({ isActive }) =>
                      isActive ? (
                        <div className="flex items-center justify-center text-xl">
                          <Icon icon="game-icons:revolver" className="mr-3" width="30" height="30" />
                          {link.label}
                        </div>
                      ) : (
                        link.label
                      )
                    }
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
      {isSideBarOpen && (
        <div
          className="absolute  z-10 h-[244px] border-r-8px border-r-8 border-r-[#8B5E3C] rounded-r-2xl"
          onClick={() => setIsSideBarOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
