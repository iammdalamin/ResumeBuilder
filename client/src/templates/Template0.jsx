import React from "react";
import { AiFillLinkedin, AiOutlineMail, AiOutlineMobile } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
const Template0 = ({ generatePdfRef }) => {
  return (
    <div
      ref={generatePdfRef}
      className="w-[795px] h-[1120px] container mx-auto  bg-gray-700 overflow-hidden mb-20"
    >
      <div className="px-16 py-10 flex justify-between items-center">
        <div className="w-[60%]">
          <h1 className="text-4xl font-bold text-white">John Doe</h1>
          <h4 className="text-xl font-semibold text-orange-700 my-3">
            John Doe
          </h4>
          <p className="text-white ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            inventore quis totam quia ratione atque doloremque rem facere magnam
            animi!
          </p>
        </div>

        <div className="w-[150px] h-[150px] ">
          <img
            className="rounded-tl-full rounded-tr-full rounded-bl-full  w-full h-full border-8  border-orange-500"
            src="../../public/assets/img/profile.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="w-full h-14 flex justify-center items-center bg-gray-900">
        <ul className="flex justify-between items-center gap-14 text-white">
          <li className="flex justify-between items-center text-sm">
            <AiOutlineMail size={15} /> john.doe@mail.cm
          </li>
          <li className="flex justify-between items-center  text-sm">
            <AiOutlineMobile size={15} /> john.doe@mail.cm
          </li>
          <li className="flex justify-between items-center   text-sm">
            <AiFillLinkedin size={15} /> john.doe@mail.cm
          </li>
          <li className="flex justify-between items-center  text-sm">
            <CiLocationOn size={15} /> john.doe@mail.cm
          </li>
        </ul>
      </div>

      <div className="px-10 py-10 w-full grid grid-cols-2 gap-6 bg-white">
        <div>
          <div>
            <h1 className="text-xl uppercase font-bold text-orange-600">
              Work Experience
            </h1>
            <hr className="h-1 my-2 bg-orange-600 w-48" />

            <div>
              <h3 className="text-lg font-semibold">
                Business Development Manager
              </h3>
              <h4 className="text-md ">AirState Solutions </h4>
              <div className="w-full flex justify-between text-orange-500 text-sm italic">
                <span>12/12/1990</span>
                <span>Newyork, USA</span>
              </div>
              <ul className="list-disc marker:text-orange-500 marker:text-2xl">
                <li className="text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                  hic maxime odio similique quis et expedita ipsum corporis
                  magnam suscipit! Quos explicabo quis corrupti illum?
                </li>
                <li className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit ea eos animi sequi minima id ipsam recusandae,
                  sapiente porro nemo consequatur mollitia quisquam, quidem
                  dolore delectus magni a
                </li>
                <li className="text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Facere velit molestias, explicabo quos ea inventore maiores
                  magnam deleniti sint, dolor unde debitis a sit nulla numquam
                  voluptas blanditiis officia neque, ut suscipit cum.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mt-10 text-xl font-semibold">
                Business Development Manager
              </h3>
              <h4 className="text-lg ">AirState Solutions </h4>
              <div className="w-full flex justify-between text-orange-500 text-sm italic">
                <span>12/12/1990</span>
                <span>Newyork, USA</span>
              </div>
              <ul className="list-disc marker:text-orange-500 marker:text-2xl">
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                  hic maxime odio similique quis et expedita ipsum corporis
                  magnam suscipit! Quos explicabo quis corrupti illum?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit ea eos animi sequi minima id ipsam recusandae,
                  sapiente porro nemo consequatur mollitia quisquam, quidem
                  dolore delectus magni a
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Facere velit molestias, explicabo quos ea inventore maiores
                  magnam deleniti sint, dolor unde debitis a sit nulla numquam
                  voluptas blanditiis officia neque, ut suscipit cum.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <h1 className="text-2xl uppercase font-bold text-orange-600">
              Education
            </h1>
            <hr className="h-1 my-2 bg-orange-600 w-40" />
            <div>
              <h4 className="text-2xl font-bold ">M.Sc in Engineering</h4>
              <h6 className="text-lg ">University in Chicago, USA</h6>
              <span className=" text-sm italic text-orange-600">
                19/10/1990 - 20/12/1994
              </span>
            </div>
          </div>
          <div className="mt-10">
            <h1 className="text-2xl uppercase font-bold text-orange-600">
              Languages
            </h1>
            <hr className="h-1 my-2 bg-orange-600 w-40" />
            <ul className="list-disc list-inside marker:text-orange-600 marker:text-lg">
              <li>English - Fluent</li>
              <li>Bangla - Native</li>
              <li>Arabic - Fluent</li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <h1 className="text-2xl uppercase font-bold text-orange-600">
              Skills
            </h1>
            <hr className="h-1 my-2 bg-orange-600 w-24" />

            <div className="flex flex-col gap-5 mt-5">
              <div className="flex flex-col justify-start items-start gap-2 ">
                <h4 className="text-lg ">HTML</h4>
                <div className="w-full bg-gray-200 rounded-full h-3.5 dark:bg-gray-700">
                  <div className="bg-orange-600 h-3.5 rounded-full w-[80%]"></div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start gap-2 ">
                <h4 className="text-lg ">CSS</h4>
                <div className="w-full bg-gray-200 rounded-full h-3.5 dark:bg-gray-700">
                  <div className="bg-orange-600 h-3.5 rounded-full w-[75%]"></div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start gap-2 ">
                <h4 className="text-lg ">Javascript</h4>
                <div className="w-full bg-gray-200 rounded-full h-3.5 dark:bg-gray-700">
                  <div className="bg-orange-600 h-3.5 rounded-full w-[85%]"></div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start gap-2 ">
                <h4 className="text-lg ">ES6</h4>
                <div className="w-full bg-gray-200 rounded-full h-3.5 dark:bg-gray-700">
                  <div className="bg-orange-600 h-3.5 rounded-full w-[80%]"></div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start gap-2 ">
                <h4 className="text-lg ">REACTJS</h4>
                <div className="w-full bg-gray-200 rounded-full h-3.5 dark:bg-gray-700">
                  <div className="bg-orange-600 h-3.5 rounded-full w-[92%]"></div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start gap-2 ">
                <h4 className="text-lg ">NODEJS</h4>
                <div className="w-full bg-gray-200 rounded-full h-3.5 dark:bg-gray-700">
                  <div className="bg-orange-600 h-3.5 rounded-full w-[75%]"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h1 className="text-2xl uppercase font-bold text-orange-600">
              Organizations
            </h1>
            <hr className="h-1 my-2 bg-orange-600 w-56" />
            <div className="flex flex-col gap-4 mt-5">
              <div>
                <h4 className="text-2xl  ">American Management Association</h4>
                <h6 className="text-lg ">19/10/1990 - 20/12/1994</h6>
              </div>{" "}
              <div>
                <h4 className="text-2xl  ">American Management Association</h4>
                <h6 className="text-lg ">19/10/1990 - 20/12/1994</h6>
              </div>
              <div>
                <h4 className="text-2xl  ">American Management Association</h4>
                <h6 className="text-lg ">19/10/1990 - 20/12/1994</h6>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h1 className="text-2xl uppercase font-bold text-orange-600">
              Honours and Awards
            </h1>
            <hr className="h-1 my-2 bg-orange-600 w-80" />

            <div className="flex flex-col gap-4 mt-5">
              <div>
                <h4 className="text-2xl  ">American Management Association</h4>
                <h6 className="text-sm text-gray-700 ">
                  19/10/1990 - 20/12/1994
                </h6>
              </div>
              <div>
                <h4 className="text-2xl  ">American Management Association</h4>
                <h6 className="text-sm text-gray-700 ">
                  19/10/1990 - 20/12/1994
                </h6>
              </div>
              <div>
                <h4 className="text-2xl  ">American Management Association</h4>
                <h6 className="text-sm text-gray-700 ">
                  19/10/1990 - 20/12/1994
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template0;
