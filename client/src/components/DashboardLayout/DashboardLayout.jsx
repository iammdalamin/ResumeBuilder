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
          <li>
            {/* <NavLink
              to="/Dashboard"
              className="flex gap-2 items-center cursor-pointer "
            >
              {" "}
              <BsFillPersonLinesFill size={25} />
              {toggle ? "" : <span>Personal Info</span>}
            </NavLink> */}
            <li class="relative">
              <NavLink
                to="/dashboard/personal-info"
                className="flex gap-2  h-12  items-center cursor-pointer"
              >
                {" "}
                <span>
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                    />
                  </svg> */}
                  <BsFillPersonLinesFill className="w-5 h-5 mr-4" />
                </span>
                {toggle ? "" : <span>Personal Info</span>}
              </NavLink>
            </li>
          </li>
          <li class="relative">
            <NavLink
              to="/dashboard/skills"
              className="flex gap-2 items-center cursor-pointer truncate"
            >
              <span>
                <BiAtom className="w-5 h-5 mr-4" />
              </span>

              {toggle ? "" : <span>Skills</span>}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/education"
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
              to="/dashboard/experience"
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
