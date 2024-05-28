import { useState, useEffect } from "react";
import { FaCog, FaBars, FaTimes } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import { CgMenuMotion } from "react-icons/cg";
import { CiMenuKebab } from "react-icons/ci";

import { Link } from "react-router-dom";
import { navLinks } from "../utils";
import { styles } from "../utils/styles";
import { config } from "../utils/config";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  // const [active, setActive] = useState();
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <>
      <nav
        className={` ${styles.paddingX} top-0 left-0 z-[999] ${
          sticky
            ? "bg-[#365c7645] w-full flex py-5 items-center fixed"
            : "bg-transparent"
        }`}
      >
        <div className="flex w-full mx-auto max-w-7xl items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <h4 className="text-4xl font-signature font-bold cursor-pointer text-white">
              tim<span className="text-[#ff157c]">ih</span>ack
            </h4>
          </Link>
          <div className="md:block hidden px-7 py-2">
            <ul className="flex items-center gap-1 py-2 text-lg">
              {navLinks.map(({ id, link }) => (
                <li
                  key={id}
                  className="px-6 cursor-pointer capitalize text-white hover:text-[#ff157c] hover:scale-105 duration-200"
                >
                  <a href={`#${link}`}>{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={` ${navOpen ? "text-primary" : "text-white"} md:hidden`}
          >
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="text-white text-3xl"
            >
              {navOpen ? <FaTimes size={20} /> : <CgMenuGridO size={20} />}
            </button>
          </div>

          {navOpen && (
            <div
              className={`black-gradient absolute right-0 top-[1.8rem] z-10 duration-300 mx-4 my-2 min-w-[140px] rounded-xl p-4 md:hidden`}
            >
              <ul className="flex flex-col justify-end items-center py-2 gap-1">
                {navLinks.map(({ id, link }) => (
                  <li
                    key={id}
                    className="px-4 cursor-pointer capitalize py-4 text-2xl text-white hover:text-[#ff157c]"
                  >
                    <a href={`#${link}`}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
