import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Socials: React.FC = () => {
  return (
    <div className="bg-primary">
      <div className="lg:container mx-auto mt-5">
        <div className="flex ">
          <div className="w-full h-20 sm:w-1/3  flex justify-center items-center ">
            <Link href="#">
              <a>
                <FaInstagram
                  size={40}
                  className="cursor-pointer text-white hover:opacity-75"
                />
              </a>
            </Link>
          </div>
          <div className="w-full h-20 sm:w-1/3 flex justify-center items-center ">
            <Link href="#">
              <a>
                <FaFacebook
                  size={40}
                  className="cursor-pointer text-white hover:opacity-75"
                />
              </a>
            </Link>
          </div>
          <div className="w-full h-20 sm:w-1/3  flex justify-center items-center">
            <Link href="#">
              <a>
                <FaLinkedin
                  size={40}
                  className="cursor-pointer text-white hover:opacity-75"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;
