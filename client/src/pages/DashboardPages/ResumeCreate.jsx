import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";

import DashboardLayout from "../../components/DashboardLayout/DashboardLayout";

const ResumeCreate = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [address, setAddress] = useState("");
  const [summary, setSummary] = useState("");
  const [skills, setSkills] = useState([]);
  const [skillName, setSkillName] = useState("");
  const [percent, setPercent] = useState();
  const [skill, setSkill] = useState({ name: "", percent: "" });

  const [education, setEducation] = useState({
    nameOfExam: "",
    departmentName: "",
    graduationStart: "",
    graduationEnd: "",
    instituteName: "",
  });
  const [experience, setExperience] = useState([]);

  const skillData = {
    name: skillName,
    percent: percent,
  };
  const handleAddSkills = async (e) => {
    // e.preventDefault();
    setSkills([...skills, skillData]);
    setSkillName("");
    setPercent("");
  };
  console.log(skills);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      phone,
      email,
      address,
      summary,
      skills,
      linkedIn,
      education,
    };
    console.log("Data", data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddEducation = () => {
    setEducation([...education, { institution: "", degree: "", date: "" }]);
  };

  const handleAddExperience = () => {
    setExperience([...experience, { company: "", position: "", date: "" }]);
  };

  const handleRemoveEducation = (index) => {
    const updatedEducation = [...education];
    updatedEducation.splice(index, 1);
    setEducation(updatedEducation);
  };

  const handleRemoveExperience = (index) => {
    const updatedExperience = [...experience];
    updatedExperience.splice(index, 1);
    setExperience(updatedExperience);
  };

  const handleEducationChange = (event, index, field) => {
    const updatedEducation = [...education];
    updatedEducation[index][field] = event.target.value;
    setEducation(updatedEducation);
  };

  const handleExperienceChange = (event, index, field) => {
    const updatedExperience = [...experience];
    updatedExperience[index][field] = event.target.value;
    setExperience(updatedExperience);
  };

  return (
    <DashboardLayout>
      <div className="container mx-auto  flex  justify-center items-center h-screen">
        <div className="flex flex-col gap-4 w-[63%]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <input
              onChange={(e) => setFirstName(e.target.value)}
              className="resumeInput"
              type="text"
              placeholder="FirstName"
              required
            />
            <input
              onChange={(e) => setLastName(e.target.value)}
              className="resumeInput"
              type="text"
              placeholder="LastName"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="resumeInput"
              type="email"
              placeholder="Email"
            />
            <input
              onChange={(e) => setPhone(e.target.value)}
              className="resumeInput"
              type="phone"
              placeholder="Phone"
            />
          </div>
          <input
            onChange={(e) => setLinkedIn(e.target.value)}
            className="resumeInput"
            type="text"
            placeholder="LinkedIn"
          />
          <textarea
            onChange={(e) => setSummary(e.target.value)}
            className="resumeInput"
            type="summary"
            placeholder="Summary"
          />
          <textarea
            onChange={(e) => setAddress(e.target.value)}
            className="resumeInput"
            type="address"
            placeholder="Address"
          />
          <div className="flex">
            <input
              onChange={(e) => setSkillName(e.target.value)}
              type="text"
              value={skillName}
              className="resumeInput"
              placeholder="Skills"
            />
            <input
              onChange={(e) => setPercent(e.target.value)}
              type="number"
              value={percent}
              min={1}
              max={100}
              className="resumeInput"
              placeholder="Percentage"
            />
            <button
              className="py-3.5 px-5 bg-gray-800"
              onClick={(e) => handleAddSkills()}
            >
              <AiFillPlusCircle className="text-white" size={35} />
            </button>
          </div>
          <div>
            {skills?.map((skill, i) => {
              return (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-800 text-md font-medium mr-2 px-3.5 py-1.5 rounded dark:bg-blue-900 dark:text-blue-300"
                >
                  {skill.name}
                </span>
              );
            })}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <input
              onChange={handleChange}
              name="nameOfExam"
              value={education.nameOfExam}
              className="resumeInput"
              type="text"
              placeholder="Name of exam"
            />
            {/* nameOfExam
departmentName
graduationDate
instituteName */}
            <input
              onChange={handleChange}
              name="departmentName"
              value={education.departmentName}
              className="resumeInput"
              type="text"
              placeholder="Name of department"
            />
            <input
              onChange={handleChange}
              name="graduationDate"
              value={education.graduationDate}
              className="resumeInput"
              type="date"
              placeholder="Passing Year"
            />
            <input
              onChange={handleChange}
              name="instituteName"
              value={education.instituteName}
              className="resumeInput"
              type="text"
              placeholder="Institute Name"
            />
          </div>
          <div className="w-full flex justify-center">
            <button className="px-4 py-2 bg-gray-800 text-white rounded-xl">
              Add More{" "}
            </button>
          </div>
          <button className="submitBtn" onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ResumeCreate;
