import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { info } from "../../redux/resume";

const EducationInput = () => {
  const resume = useSelector((state) => state.resume.value);
  const dispatch = useDispatch();
  const [education, setEducation] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  console.log(resume);

  useEffect(() => {
    dispatch(
      info({
        ...resume,
        graduation: [
          {
            instituteName: education?.instituteName,
            examName: education?.examName,
            passingYear: education?.passingYear,
            department: education?.department,
          },
        ],
      })
    );
  }, [education]);
  return (
    <>
      <div className="w-1/2 bg-gray-900 h-auto text-white rounded-xl py-20 px-10 flex flex-col gap-4 ">
        <div class="relative float-label-input ">
          <input
            type="text"
            name="examName"
            placeholder=" "
            autoComplete="off"
            className=" resumeInput"
            onChange={(e) => handleChange(e)}
          />
          <label
            for="name"
            className="absolute top-3 left-0 text-white pointer-events-none transition duration-400 ease-in-out bg-transparent  "
          >
            Exam Name
          </label>
        </div>
        <div class="relative float-label-input">
          <input
            type="text"
            name="department"
            placeholder=" "
            autoComplete="off"
            className="resumeInput"
            onChange={(e) => handleChange(e)}
          />
          <label
            for="name"
            className="absolute top-3 left-0 text-white pointer-events-none transition duration-400 ease-in-out bg-transparent  "
          >
            Department Name
          </label>
        </div>
        <div class="relative float-label-input">
          <input
            type="text"
            name="instituteName"
            placeholder=" "
            autoComplete="off"
            className="resumeInput"
            onChange={(e) => handleChange(e)}
          />
          <label
            for="name"
            className="absolute top-3 left-0 text-white pointer-events-none transition duration-400 ease-in-out bg-transparent  "
          >
            Institute Name
          </label>
        </div>

        <div class="flex items-center">
          <div class="relative">
            <input
              name="passingYear"
              type="date"
              class="resumeInput "
              placeholder="Select date start"
              onChange={(e) => handleChange(e)}
            />
          </div>
          {/* <span class="mx-4 text-gray-500">to</span> */}
          {/* <div class="relative">
            <input
              name="graduationEnd"
              type="date"
              class="resumeInput "
              placeholder="Select date end"
              onChange={(e) => handleChange(e)}
            />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default EducationInput;
