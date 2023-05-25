import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BiAtom } from "react-icons/bi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { RxResume } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const DashboardLayout = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex justify-start items-start ">
      {" "}
      <nav
        className={
          toggle
            ? "w-0 md:w-[6rem] h-screen bg-gray-800 p-8 text-white duration-700 "
            : "w-[26rem] h-screen bg-gray-800 p-8 text-white  duration-700"
        }
      >
        <div className="w-full ">
          <div className="text-white flex justify-start items-center gap-2">
            <span>
              {" "}
              <RxResume className="text-white" size={35} />
            </span>
            {toggle ? (
              ""
            ) : (
              <h2 className="font-bold text-xl delay-500">ResumeCraft</h2>
            )}
          </div>
          <div className="relative">
            {!toggle ? (
              <div
                className="absolute top-[-2.4rem] right-[-3.5rem] p-2 bg-white text-gray-800 rounded-xl cursor-pointer"
                onClick={() => setToggle(!toggle)}
              >
                <AiOutlineArrowLeft size={25} />
              </div>
            ) : (
              <div
                className="absolute top-[-2.4rem] right-[-3.5rem] p-2 bg-white text-gray-800 rounded-xl cursor-pointer "
                onClick={() => setToggle(!toggle)}
              >
                <AiOutlineArrowRight size={25} />
              </div>
            )}
          </div>
        </div>

        <ul className="w-full mt-20 flex flex-col  text-lg space-y-8">
          <li class="relative">
            <NavLink
              to="/dashboard"
              className="flex gap-2  h-12  items-center cursor-pointer"
            >
              {" "}
              <span>
                <BsFillPersonLinesFill className="w-5 h-5 mr-4" />
              </span>
              {toggle ? "" : <span>Personal Info</span>}
            </NavLink>
          </li>
          <li class="relative">
            <NavLink
              to="/dashboard"
              className="flex gap-2 items-center cursor-pointer truncate"
              aria-disabled
            >
              <span>
                <BiAtom className="w-5 h-5 mr-4" />
              </span>

              {toggle ? "" : <span>Skills</span>}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className="flex gap-2  h-12  items-center cursor-pointer"
            >
              <span>
                <FaGraduationCap size={25} />
              </span>
              {toggle ? "" : <span>Education</span>}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className="flex gap-2 items-center cursor-pointer"
            >
              <span>
                <BiAtom size={25} />
              </span>{" "}
              <div>{toggle ? "" : <span>Experience</span>}</div>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default DashboardLayout;
