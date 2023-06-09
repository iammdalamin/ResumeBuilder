import cogoToast from "cogo-toast";
import React, { useEffect, useState } from "react";
import { AiFillPlusCircle, AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { info } from "../../redux/resume";

const SkillsInput = () => {
  const resume = useSelector((state) => state.resume.value);
  const dispatch = useDispatch();
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);

  const handleAddSkills = async (e) => {
    e.preventDefault();
    if (!skill.trim()) {
      cogoToast.warn("Please insert valid skill name");
    } else {
      setSkills([...skills, skill]);
      setSkill("");
    }
  };
  const handleDeleteSkill = (e) => {
    const newList = skills.filter((skill) => skill != e);
    setSkills(newList);
  };
  console.log("skills", resume);

  useEffect(() => {
    dispatch(
      info({
        ...resume,
        skills: skills,
      })
    );
  }, [skills]);
  return (
    <>
      <div className="w-1/2 bg-gray-900 h-auto text-white rounded-xl py-12 px-4 md:px-10 flex flex-col ">
        <div class="relative float-label-input ">
          <input
            type="text"
            name="examName"
            placeholder=" "
            autoComplete="off"
            className=" resumeInput"
            onChange={(e) => setSkill(e.target.value.toUpperCase())}
          />
          <label
            for="name"
            className="absolute top-3 left-0 text-white pointer-events-none transition duration-400 ease-in-out bg-transparent  "
          >
            Skills
          </label>

          <span
            className="absolute mt-2 cursor-pointer top-0 right-0 block"
            onClick={(e) => handleAddSkills(e)}
          >
            {" "}
            <AiFillPlusCircle size={25} />
          </span>
        </div>
        <div className="flex flex-wrap gap-2 text-sm ">
          {skills?.map((skill, i) => {
            return (
              <div
                key={i}
                className="bg-blue-100 text-blue-800  font-medium  px-3.5 py-1.5 rounded flex justify-center items-center transition-all"
              >
                {skill}
                <i
                  className="p-1 cursor-pointer"
                  onClick={() => handleDeleteSkill(skill)}
                >
                  <AiOutlineClose size={17} />
                </i>
              </div>
            );
          })}
          {!skills && <h1>Add some skill</h1>}
        </div>
      </div>
    </>
  );
};

export default SkillsInput;
