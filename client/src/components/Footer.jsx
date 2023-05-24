import React from "react";
import { AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="w-full flex justify-center items-center p-4 bg-gray-600">
        <ul className="flex gap-5 text-white">
          <li className="p-3 w-full h-full rounded-full bg-white  text-indigo-900 hover:bg-indigo-900 hover:text-white  cursor-pointer transition-colors ease-in-out duration-500">
            <Link to="/">
              <FaFacebookF size={20} />
            </Link>
          </li>
          <li className="p-3 w-full h-full rounded-full bg-white text-indigo-900 hover:bg-indigo-900 hover:text-white cursor-pointer transition-colors ease-in-out duration-500">
            <Link to="/">
              <AiFillLinkedin size={20} />
            </Link>
          </li>
          <li className="p-3 w-full h-full rounded-full bg-white   text-indigo-900 hover:bg-indigo-900 hover:text-white cursor-pointer transition-colors ease-in-out duration-500">
            <Link to="/">
              <BsTwitter size={20} />
            </Link>
          </li>
          <li className="p-3 w-full h-full rounded-full bg-white text-indigo-900 hover:bg-indigo-900 hover:text-white cursor-pointer transition-colors ease-in-out duration-500">
            <Link to="/">
              <AiOutlineInstagram size={20} />
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full bg-gray-700">
        <div className="container mx-auto py-10 flex flex-wrap justify-around">
          <div className="p-4 sm:p-0">
            <h2 className="text-md font-semibold text-white">ResumeCraft</h2>
            <ul className="text-white text-sm flex flex-col gap-5 mt-5">
              <li className="hover:text-indigo-300">
                <Link to="/">Resume Templates</Link>
              </li>
              <li className="hover:text-indigo-300">
                <Link to="/">CV Templates</Link>
              </li>
              <li className="hover:text-indigo-300">
                <Link to="/">Cover Letters</Link>
              </li>
              <li className="hover:text-indigo-300">
                <Link to="/">Career Blog </Link>
              </li>
              <li className="hover:text-indigo-300">
                <Link to="/">Pricing</Link>
              </li>
            </ul>
          </div>

          <div className="p-4 sm:p-0">
            <h2 className="text-md font-semibold text-white">ResumeCraft</h2>
            <ul className="text-white text-sm flex flex-col gap-5 mt-5">
              <li className="hover:text-indigo-300">
                <Link to="/">Resume Templates</Link>
              </li>
              <li className="hover:text-indigo-300">
                <Link to="/">CV Templates</Link>
              </li>
              <li className="hover:text-indigo-300">
                <Link to="/">Cover Letters</Link>
              </li>
              <li className="hover:text-indigo-300">
                <Link to="/">Career Blog </Link>
              </li>
              <li className="hover:text-indigo-300">
                <Link to="/">Pricing</Link>
              </li>
            </ul>
          </div>

          <div className="p-4 sm:p-0">
            <h2 className="text-md font-semibold text-white">ResumeCraft</h2>
            <ul className="text-white text-sm flex flex-col gap-5 mt-5">
              <li className="hover:text-indigo-300">
                <Link to="/">Resume Templates</Link>
              </li>
              <li className="hover:text-indigo-300">
                <Link to="/">CV Templates</Link>
              </li>
              <li className="hover:text-indigo-300">
                <Link to="/">Cover Letters</Link>
              </li>
              <li className="hover:text-indigo-300">
                <Link to="/">Career Blog </Link>
              </li>
              <li className="hover:text-indigo-300">
                <Link to="/">Pricing</Link>
              </li>
            </ul>
          </div>

          <div className="p-4 sm:p-0">
            <h2 className="text-md font-semibold text-white">ResumeCraft</h2>
            <ul className="text-white text-sm flex flex-col gap-5 mt-5">
              <li className="hover:text-indigo-300">
                <Link to="/">Resume Templates</Link>
              </li>
              <li className="hover:text-indigo-300">
                <Link to="/">CV Templates</Link>
              </li>
              <li className="hover:text-indigo-300">
                <Link to="/">Cover Letters</Link>
              </li>
              <li className="hover:text-indigo-300">
                <Link to="/">Career Blog </Link>
              </li>
              <li className="hover:text-indigo-300">
                <Link to="/">Pricing</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-900">
        <div className="container mx-auto py-10  text-white flex flex-col justify-center items-center text-center">
          <span>Our Vision is to</span>
          <h2 className="text-xl ">Fight Galactic Unemployment</h2>
          <hr className="my-4 bg-indigo-400 w-20 p-[1px]" />
          <ul className=" flex flex-col justify-center items-center text-center gap-2 text-sm ">
            <li>Ny Carlsberg Vej 80</li>
            <li>DK 1799 Copenhagen, Denmark</li>
            <li>Copyright © 2023 Novorésumé ApS. All Rights Reserved.</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
