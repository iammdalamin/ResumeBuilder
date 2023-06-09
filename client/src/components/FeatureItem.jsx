import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useCreateResumeMutation, useFindResumeQuery } from "../feature/api";
import { redirect } from "react-router-dom";

const FeatureItem = ({ imgURL, title, desc, type, premium }) => {
  const navigate = useNavigate();
  const [createResume, { data, isLoading }] = useCreateResumeMutation();

  const exploreHandle = async (type) => {
    await createResume(type);
  };
  if (data?.data.length > 0) {
  } else {
    navigate(`/dashboard/resume/create/${type}`);
  }
  console.log(data);

  return (
    <div className="mb-14 relative ">
      {premium ? (
        <div className=" absolute  w-full -top-11 text-center mb-4 flex justify-center items-center">
          <div className="text-sm font-bold bg-indigo-400 text-white p-2 rounded-lg flex justify-center gap-1.5 items-center w-28 ">
            Premium{" "}
            <i className="bg-white p-1 rounded-full">
              {" "}
              <AiFillStar className="text-indigo-800" size={12} />{" "}
            </i>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="w-[18rem]  transition-all duration-500">
        <div className="w-full h-full bg-slate-400"></div>

        <div className="relative group ">
          <button
            className="absolute top-52 left-14 px-6 py-2 bg-indigo-700 text-white  duration-500 ease-linear hidden group-hover:block "
            onClick={() => exploreHandle(type)}
          >
            {" "}
            Explore Resume
          </button>
          <img
            className="w-full rounded ease-linear duration-300 cursor-pointer "
            src={imgURL}
            alt={title}
          />
        </div>

        <div className="text-left mt-5">
          <h3 className="text-xl font-semibold">{title ? title : type}</h3>
          <p className="text-gray-500 text-sm">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureItem;
