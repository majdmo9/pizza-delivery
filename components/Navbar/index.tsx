"use client";
import React, { useRef } from "react";

const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={navRef} className="fixed top-0 min-w-full bg-white z-20 flex">
      Navbar
    </div>
  );
};

export default Navbar;
