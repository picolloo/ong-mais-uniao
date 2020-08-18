import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer
      className=" text-white p-4"
      style={{ background: "rgba(51,51,51,1)" }}
    >
      <div className="flex justify-between container mx-auto">
        <div className="flex justify-between w-72">
          <div className="flex flex-col">
            <Link href="#">
              <a className="mb-2">Como colaborar</a>
            </Link>
            <Link href="#">
              <a className="mb-2">Fale conosco</a>
            </Link>
            <Link href="#">
              <a className="mb-2">Relatórios</a>
            </Link>
            <Link href="#">
              <a>Novidades</a>
            </Link>
          </div>
          <div className="flex flex-col">
            <Link href="#">
              <a className="mb-2">Quem somos</a>
            </Link>
            <Link href="#">
              <a>O que fazemos</a>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center  w-50">
          <span>LOGO</span>
          <div className="flex justify-around">
            <span>Face</span>
            <span>Insta</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
