import React, { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  value: string;
  classes?: string;
}

const NavLink = ({
  href,
  value,
  classes,
}: NavLinkProps): React.ReactElement => (
  <Link href="#">
    <span
      className={`${classes} mt-2 sm:mt-0 font-semibold hover:bg-gray-100 px-2 py-1 rounded cursor-pointer block`}
    >
      {value}
    </span>
  </Link>
);

const Navbar: React.FC = () => {
  const [openMenu, openMenuSet] = useState(false);

  return (
    <header className="text-gray-800 p-2 sm:flex sm:items-center sm:justify-between md:container sm:mx-auto">
      <div className="flex justify-between items-center p-2 ">
        <div>
          <h2 className="hover:text-cool-gray-600 focus:text-cool-gray-600 text-xl font-bold">
            <Link href="/">Ong Mais União</Link>
          </h2>
        </div>
        <div className="sm:hidden">
          <button
            type="button"
            onClick={() => openMenuSet(!openMenu)}
            className="block hover:text-cool-gray-600 focus:text-cool-gray-600 outline-none w-6 h-6"
          >
            {openMenu ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </div>
      <div className={`${openMenu ? "block" : "hidden"} sm:flex items-center`}>
        <NavLink href="donations" value="Doações" classes="mr-2" />
        <NavLink href="store" value="Moeda" classes="mr-2" />
        <NavLink href="projects" value="Projetos" classes="mr-2" />
        <NavLink href="news" value="Notícias" classes="mr-2" />
        <NavLink href="contact" value="Contato" />
      </div>
    </header>
  );
};

export default Navbar;
