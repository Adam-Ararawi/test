"use client"

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (menuRef.current) {
      setHeight(isOpen ? menuRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <nav className="bg-neutral-900 rounded-xl shadow-lg shadow-black/50 sm:w-fit sm:mt-2 sm:mx-auto overflow-hidden">
      {/* Mobile Burger Button */}
      <div className="sm:hidden flex justify-end items-center p-3 pr-4"> {/* Adjusted padding */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none w-5 h-5 relative flex flex-col justify-around items-center" // Increased size and added flex for centering
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {/* Burger lines with refined transitions */}
          <span
            className={`block w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${isOpen ? "rotate-45  translate-y-[8.5px]" : ""
              }`}
          ></span>
          <span
            className={`block w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"
              }`}
          ></span>
          <span
            className={`block w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${isOpen ? "-rotate-45  -translate-y-[6px]" : ""
              }`}
          ></span>
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex sm:mx-auto sm:w-fit">
        <NavLinks />
      </div>

      {/* Mobile Navigation */}
      <div
        ref={menuRef}
        className="sm:hidden transition-all duration-300 ease-in-out"
        style={{ height: `${height}px` }}
      >
        <div className="flex flex-col space-y-1">
          <NavLink href="/" mobile>Home</NavLink>
          <NavLink href="/posts" mobile>Posts</NavLink>
          <NavLink href="/articles/featured" mobile>Featured Articles</NavLink>
          <NavLink href="/articles" mobile>Articles</NavLink>
        </div>
      </div>
    </nav>
  );
}
function NavLinks() {
  return (
    <>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/posts">Posts</NavLink>
      <NavLink href="/articles/featured">Featured Articles</NavLink>
      <NavLink href="/articles">Articles</NavLink>
    </>
  );
}

function NavLink({ href, children, mobile = false }) {
  return (
    <Link
      href={href}
      className={`hover:bg-neutral-800 transition-all duration-300 px-4 py-2 
        ${mobile ? "text-center" : ""}
         ${href === '/' ? 'rounded-t-xl' :
          href === '/articles' ? 'rounded-b-xl pb-3' : ''
        }`}
    >
      {children}
    </Link>
  );
}