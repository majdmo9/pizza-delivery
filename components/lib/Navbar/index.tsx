"use client";
import MenuIcon from "@pizza/components/icons/MenuIcon";
import MainLogo from "../MainLogo";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const Navbar = () => {
  const theme = useTheme();
  const pathname = usePathname();
  const router = useRouter();
  const isDownMD = useMediaQuery(theme.breakpoints.down("md"));
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => setOpen(prev => !prev);

  const goToHome = () => {
    router.push("/");
  };

  useEffect(() => {
    setOpen(false);
  }, [pathname, isDownMD]);

  return (
    <header className="absolute top-0 w-full text-white py-4 px-6 md:px-8 flex justify-between items-center transition-all">
      <div className="flex items-center gap-2 cursor-pointer" onClick={goToHome}>
        <MainLogo />
        <h1 className="text-2xl font-bold">Pizza Palace</h1>
      </div>
      <motion.nav
        className={
          isOpen
            ? "flex flex-col justify-center items-center absolute top-0 left-0 bg-white w-full text-black gap-6 py-6"
            : "hidden md:flex space-x-4"
        }
        initial={{ opacity: 0 }}
        animate={{ y: isOpen || !isDownMD ? 0 : -100, opacity: isOpen || !isDownMD ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {isOpen ? (
          <button
            onClick={toggleMenu}
            className="absolute right-6 top-10"
            data-collaps-toggle="navbar-default"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation</span>
          </button>
        ) : (
          <></>
        )}
        <div className={isOpen ? "mt-10 flex flex-col items-center gap-6" : "flex space-x-4 md:h-auto h-0 transition-all"}>
          <Link className="hover:underline" href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link className="hover:underline" href="/#menu" onClick={() => setOpen(false)}>
            Menu
          </Link>
          <Link className="hover:underline" href="/#about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link className="hover:underline" href="/#contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </div>
      </motion.nav>
      <button onClick={toggleMenu} className="md:hidden" data-collaps-toggle="navbar-default" aria-controls="navbar-default" aria-expanded="false">
        <MenuIcon className="h-6 w-6" />
        <span className="sr-only">Toggle navigation</span>
      </button>
    </header>
  );
};

export default Navbar;
