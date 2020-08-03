import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import {} from "react-icons/md";

const Socials: React.FC = () => {
  return (
    <div className="bg-primary">
      <div className="lg:container mx-auto mt-5">
        <div className="flex ">
          <div className="w-full h-20 sm:w-1/3  flex justify-center items-center ">
            <Link href="#">
              <FaInstagram
                size={40}
                className="cursor-pointer text-white hover:opacity-75"
              />
            </Link>
          </div>
          <div className="w-full h-20 sm:w-1/3 flex justify-center items-center ">
            <Link href="#">
              <FaFacebook
                size={40}
                className="cursor-pointer text-white hover:opacity-75"
              />
            </Link>
          </div>
          <div className="w-full h-20 sm:w-1/3  flex justify-center items-center">
            <Link href="#">
              <FaLinkedin
                size={40}
                className="cursor-pointer text-white hover:opacity-75"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;
