import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { info } from "../../redux/resume";

const PersonalInput = ({ updateResume }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [img, setImg] = useState({});
  const resume = useSelector((state) => state.resume.value);
  console.log(resume);
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const linkedinRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();
  const summaryRef = useRef();
  const photoRef = useRef();

  const handleChange = (e) => {
    const file = e.target.files[0];
    TransformFile(file);
  };
  const TransformFile = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImg(reader.result);
      };
    }
  };
  useEffect(() => {
    dispatch(
      info({
        ...resume,
        firstName: firstNameRef?.current.value,
        lastName: lastNameRef?.current.value,
        email: emailRef?.current.value,
        linkedin: linkedinRef?.current.value,
        phone: phoneRef?.current.value,
        address: addressRef?.current.value,
        summary: summaryRef?.current.value,
        photo: img,
      })
    );
  }, [img]);

  // useEffect(() => {
  //   refName.current.value = user.name;
  //   refEmail.current.value = user.email;
  //   refPhone.current.value = user.phone;
  //   dispatch(
  //     info({
  //       ...user,
  //       name: refName.current.value,
  //       email: refEmail.current.value,
  //       phone: refPhone.current.value,
  //       emailValid: emailval(refEmail.current.value),
  //       phoneValid: phoneVal(refPhone.current.value),
  //     })
  //   );
  // }, []);

  return (
    // <DashboardLayout>

    <div className="max-w-[50rem] w-full  bg-gray-900 h-auto text-white rounded-xl py-20 px-10 flex flex-col gap-4">
      <h1>Let's create your resume!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div class="relative float-label-input ">
          <input
            ref={firstNameRef}
            type="text"
            name="firstName"
            placeholder=" "
            autoComplete="off"
            className="resumeInput"
          />
          <label
            for="name"
            className="absolute top-3 left-0 text-white pointer-events-none transition duration-400 ease-in-out bg-transparent  "
          >
            First Name
          </label>
        </div>
        <div class="relative float-label-input ">
          <input
            ref={lastNameRef}
            type="text"
            name="lastName"
            placeholder=" "
            autoComplete="off"
            className=" resumeInput"
          />
          <label
            htmlFor="LastName"
            className="absolute top-3 left-0 text-white pointer-events-none transition duration-400 ease-in-out bg-transparent  "
          >
            Last Name
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div class="relative float-label-input ">
          <input
            ref={emailRef}
            type="email"
            name="email"
            placeholder=" "
            autoComplete="off"
            className=" resumeInput"
          />
          <label
            for="Email"
            className="absolute top-3 left-0 text-white pointer-events-none transition duration-400 ease-in-out bg-transparent  "
          >
            Email
          </label>
        </div>
        <div class="relative float-label-input ">
          <input
            ref={phoneRef}
            type="phone"
            name="phone"
            placeholder=" "
            autoComplete="off"
            className=" resumeInput"
          />
          <label
            for="Phone"
            className="absolute top-3 left-0 text-white pointer-events-none transition duration-400 ease-in-out bg-transparent  "
          >
            Phone
          </label>
        </div>
      </div>
      <div class="relative float-label-input ">
        <input
          ref={linkedinRef}
          type="text"
          name="linkedin"
          placeholder=" "
          autoComplete="off"
          className=" resumeInput"
        />
        <label
          for="LinkedIn"
          className="absolute top-3 left-0 text-white pointer-events-none transition duration-400 ease-in-out bg-transparent  "
        >
          LinkedIn
        </label>
      </div>
      <div class="relative float-label-input ">
        <input
          ref={photoRef}
          type="file"
          name="linkedin"
          placeholder=" "
          autoComplete="off"
          className=" resumeInput"
          onChange={(e) => handleChange(e)}
        />
        <label
          for="LinkedIn"
          className="absolute top-3 left-0 text-white pointer-events-none transition duration-400 ease-in-out bg-transparent  "
        >
          Image
        </label>
      </div>
      <div class="relative float-label-input ">
        <textarea
          ref={summaryRef}
          type="text"
          name="summary"
          placeholder=" "
          autoComplete="off"
          className=" resumeInput"
        />
        <label
          for="Summary"
          className="absolute top-3 left-0 text-white pointer-events-none transition duration-400 ease-in-out bg-transparent  "
        >
          Summary
        </label>
      </div>
      <div class="relative float-label-input ">
        <textarea
          ref={addressRef}
          type="text"
          name="address"
          placeholder=" "
          autoComplete="off"
          className=" resumeInput"
        />
        <label
          for="Address"
          className="absolute top-3 left-0 text-white pointer-events-none transition duration-400 ease-in-out bg-transparent  "
        >
          Address
        </label>
      </div>
    </div>

    // </DashboardLayout>
  );
};

export default PersonalInput;
