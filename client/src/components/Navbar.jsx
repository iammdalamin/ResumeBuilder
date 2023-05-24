import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  AiFillLinkedin,
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineMenu,
} from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import Modal from "./Modal";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);

  return (
    <>
      <nav className="h-20 w-full flex flex-row justify-center items-center bg-indigo-400 z-[99999] fixed">
        <div className="container px-5 md:px-0 flex justify-between items-center ">
          <div>
            <h1 className="font-semibold text-white">ResumeCraft</h1>
          </div>
          <div className="hidden lg:block">
            <ul className="list-none flex items-center gap-6 text-white">
              <li>
                <Link to="/resume-templates">Resume Templates</Link>
              </li>
              <li>
                <Link to="/">CV Templates</Link>
              </li>
              <li>
                <Link to="/">Cover Letters</Link>
              </li>
              <li>
                <Link to="/">Career Blog </Link>
              </li>
              <li>
                <Link to="/">Pricing</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="list-none flex items-center gap-6">
              <li className="hidden md:block">
                <button
                  className="px-6 py-1 text-md bg-white hover:bg-gray-200  text-indigo-600 rounded-3xl shadow-lg transition-colors   ease-in-out duration-500"
                  onClick={() => setShowModal(!showModal)}
                >
                  Sign Up
                </button>
              </li>
              <li className="hidden md:block">
                <button
                  className="px-6 py-1 text-md bg-indigo-500 hover:bg-indigo-700 text-white rounded-3xl shadow-lg transition-colors  ease-in-out duration-400"
                  onClick={() => setShowModal1(!showModal1)}
                >
                  Login
                </button>
              </li>
              <li>
                <i
                  className="text-white cursor-pointer block lg:hidden"
                  onClick={() => setToggle(!toggle)}
                >
                  {toggle ? (
                    <AiOutlineClose size={25} />
                  ) : (
                    <AiOutlineMenu size={25} />
                  )}
                </i>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* // Mobile Version */}
      <nav
        className={
          toggle
            ? `fixed inset-0  bg-white bg-opacity-25  backdrop-blur-lg	ease-in-out duration-500`
            : null
        }
      >
        <motion.div
          className={
            toggle
              ? ` h-screen bg-white drop-shadow-lg fixed z-10   right-0 top-20 w-[100%]  md:w-[30%]  ease-in-out duration-500`
              : `fixed right-[-100%] h-screen w-full  top-20 p-10 z-10 ease-in-out duration-500`
          }
        >
          <div className="container flex flex-col justify-center items-center pt-16 px-6">
            <div>
              <ul className="list-none flex flex-col items-center gap-6">
                <li>
                  <button
                    className="px-12 py-1 text-md bg-white hover:bg-gray-200  text-indigo-600 rounded-3xl shadow-lg transition-colors  ease-in-out duration-400"
                    onClick={() => setShowModal(!showModal) || setToggle()}
                  >
                    Sign Up
                  </button>
                </li>
                <li>
                  <button
                    className="px-12 py-1 text-md bg-indigo-500 hover:bg-indigo-700 text-white rounded-3xl shadow-lg transition-colors ease-in-out duration-400"
                    onClick={() => setShowModal1(!showModal1) || setToggle()}
                  >
                    Login
                  </button>
                </li>
                <li>
                  <i
                    className="text-white cursor-pointer "
                    onClick={() => setToggle(!toggle)}
                  >
                    {toggle ? (
                      <AiOutlineClose size={25} />
                    ) : (
                      <AiOutlineMenu size={25} />
                    )}
                  </i>
                </li>
              </ul>
            </div>
            <div className=" w-full  pb-10">
              <hr />
            </div>

            <div>
              <ul className="list-none flex flex-col items-center gap-6 text-md text-gray-600 ">
                <li className="hover:text-indigo-600">
                  <Link to="/resume-templates">Resume Templates</Link>
                </li>
                <li className="hover:text-indigo-600">
                  <Link to="/">CV Templates</Link>
                </li>
                <li className="hover:text-indigo-600">
                  <Link to="/">Cover Letters</Link>
                </li>
                <li className="hover:text-indigo-600">
                  <Link to="/">Career Blog </Link>
                </li>
                <li className="hover:text-indigo-600">
                  <Link to="/">Pricing</Link>
                </li>
              </ul>
            </div>
            <div className="w-full  py-10">
              <hr />
            </div>
            <div className="pb-6">
              <h2 className="text-lg font-semibold text-gray-700">About Us</h2>
            </div>
            <div className="pb-3">
              <ul className="flex gap-5 text-white">
                <li className="p-3 w-full h-full rounded-full bg-indigo-600 hover:bg-indigo-900 cursor-pointer transition-colors ease-in-out duration-500">
                  <Link to="/">
                    <FaFacebookF size={20} />
                  </Link>
                </li>
                <li className="p-3 w-full h-full rounded-full bg-indigo-600 hover:bg-indigo-900 cursor-pointer transition-colors ease-in-out duration-500">
                  <Link to="/">
                    <AiFillLinkedin size={20} />
                  </Link>
                </li>
                <li className="p-3 w-full h-full rounded-full bg-indigo-600 hover:bg-indigo-900 cursor-pointer transition-colors ease-in-out duration-500">
                  <Link to="/">
                    <BsTwitter size={20} />
                  </Link>
                </li>
                <li className="p-3 w-full h-full rounded-full bg-indigo-600 hover:bg-indigo-900 cursor-pointer transition-colors ease-in-out duration-500">
                  <Link to="/">
                    <AiOutlineInstagram size={20} />
                  </Link>
                </li>
              </ul>
            </div>
            <Link className="text-gray-500 text-sm" to="/">
              email@resumecraft.com
            </Link>
            <Link className="text-gray-500 text-sm" to="/">
              Help center
            </Link>
          </div>
        </motion.div>
      </nav>

      <Modal isVisible={showModal} onClose={() => setShowModal(!showModal)}>
        <SignUpPage onClose={() => setShowModal(!showModal)} />
      </Modal>
      <Modal isVisible={showModal1} onClose={() => setShowModal(!showModal1)}>
        <LoginPage onClose={() => setShowModal1(!showModal1)} />
      </Modal>
    </>
  );
};

export default Navbar;
