import React from "react";
import { AiFillLinkedin, AiOutlineMail, AiOutlineMobile } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
const Template0 = ({ generatePdfRef, resume }) => {
  const {
    firstName,
    lastName,
    email,
    linkedin,
    phone,
    address,
    summary,
    graduation,
    experience,
    skills,
    photo,
    languages,
  } = resume;

  return (
    <div
      ref={generatePdfRef}
      className="w-[795px] h-[1120px] container mx-auto  bg-white overflow-hidden mb-20"
    >
      <div className="px-16 py-10 flex justify-between items-center bg-gray-700">
        <div className="w-[60%]">
          <h1 className="text-4xl font-bold text-white">
            {resume?.firstName.trim() ? firstName : "John Doe"}
          </h1>
          <h4 className="text-xl font-semibold text-orange-700 my-3">
            {resume?.lastName.trim() ? lastName : "John Doe"}
          </h4>
          <p className="text-white ">
            {summary.trim()
              ? summary
              : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniaminventore quis totam quia ratione atque doloremque rem facere magnamanimi!"}
          </p>
        </div>

        <div className="w-[150px] h-[150px] ">
          {resume?.photo.trim() ? (
            <img
              className="rounded-tl-full rounded-tr-full rounded-bl-full  w-full h-full border-8  border-orange-500"
              src={photo}
              alt={firstName + "" + lastName}
            />
          ) : (
            <img
              className="rounded-tl-full rounded-tr-full rounded-bl-full  w-full h-full border-8  border-orange-500"
              src={`https://res.cloudinary.com/himu/image/upload/v1685007810/user-avatar_yjgx0s.svg`}
              alt={firstName + "" + lastName}
            />
          )}
        </div>
      </div>

      <div className="w-full h-14 flex justify-center items-center bg-gray-900">
        <ul className="flex justify-between items-center gap-14 text-white">
          <li className="flex justify-between items-center text-sm">
            <AiOutlineMail size={15} />
            <span>{resume.email.trim() ? email : "john.doe@mail.cm"}</span>
          </li>
          <li className="flex justify-between items-center  text-sm">
            <AiOutlineMobile size={15} />{" "}
            <span>{resume.phone.trim() ? phone : "01835988088"}</span>
          </li>
          <li className="flex justify-between items-center   text-sm">
            <AiFillLinkedin size={15} />{" "}
            <span>
              {resume.linkedin.trim() ? linkedin : "john.doe@mail.cm"}
            </span>
          </li>
          <li className="flex justify-between items-center  text-sm">
            <CiLocationOn size={15} />{" "}
            <span>{resume.address.trim() ? address : "john.doe@mail.cm"}</span>
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

            {experience.map((item, i) => {
              const { company, position, start, end, summary } = item;
              return (
                <div key={i}>
                  <h3 className="text-xl font-semibold">
                    {position ? position : "Business Development Manager"}
                  </h3>
                  <h4 className="text-md ">
                    {company ? company : "AirState Solutions"}
                  </h4>
                  <div className="w-full flex justify-between text-orange-500 text-sm italic">
                    <span>{start ? start : "12/12/1990"}</span>
                    <span>{end ? end : "12/12/2000"}</span>
                  </div>
                  <div className="list-disc py-5">
                    <p className="text-md">
                      {summary
                        ? summary
                        : " Lorem ipsum dolor, sit amet consectetur adipisicing elitNihil animi  ipsavitae a voluptatibus sedsapiente unde rerum modi.lorem20 Lorem ipsum dolor sitamet consectetur, adipisicing elit. Quis quas dolorem et,minima, magni vero molestias placeat voluptate, debitisdicta expedita obcaecati unde fugit accusamus praesentiumautem aperiam sequi ex"}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10">
            <h1 className="text-2xl uppercase font-bold text-orange-600">
              Education
            </h1>
            <hr className="h-1 my-2 bg-orange-600 w-40" />
            {graduation.map((item, i) => {
              const { instituteName, start, end, department, examName } = item;
              return (
                <div>
                  <h4 className="text-2xl font-bold ">
                    {examName ? examName : "B.Sc in Engineering"}
                  </h4>
                  <h6 className="text-xl font-bold ">
                    {department ? department : "Computer Science"}
                  </h6>
                  <h6 className="text-lg ">
                    {instituteName ? instituteName : "University in Dhaka"}
                  </h6>
                  <span className=" text-sm italic text-orange-600">
                    {start ? start : "19/10/1990 "}- {end ? end : "19/10/1990 "}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="mt-10">
            <h1 className="text-2xl uppercase font-bold text-orange-600">
              Languages
            </h1>
            <hr className="h-1 my-2 bg-orange-600 w-40" />
            <ul className="list-disc list-inside marker:text-orange-600 marker:text-lg">
              {languages.map((language) => {
                console.log(language);
                return <li>{language}</li>;
              })}
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
              {skills.map((skill, i) => {
                return (
                  <div
                    key={i}
                    className="flex flex-col justify-start items-start gap-2 "
                  >
                    <h4 className="text-lg ">{skill ? skill : "HTML"} </h4>
                    <div className="w-full bg-gray-200 rounded-full h-3.5 dark:bg-gray-700">
                      <div className="bg-orange-600 h-3.5 rounded-full w-[80%]"></div>
                    </div>
                  </div>
                );
              })}
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
        </div>
      </div>
    </div>
  );
};

export default Template0;
