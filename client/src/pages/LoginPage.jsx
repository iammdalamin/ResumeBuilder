import cogoToast from "cogo-toast";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../feature/api";
import { setToken, setUserDetails, setEmail } from "../helpers/SessionHelper";

const LoginPage = ({ onClose }) => {
  const [login, result] = useLoginMutation();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    await login(userData);
  };

  if (result.status === "fulfilled") {
    if (result.data.status != 400) {
      setEmail(result.data.email);

      setToken(result.data.token);
      setUserDetails(result.data);
      cogoToast.success("Login Successful");
      onClose();
    } else {
      cogoToast.error(result?.data.error);
    }
  }

  if (result.status === "rejected") {
    cogoToast.error("Something went wrong");
  }

  return (
    <motion.div
      initial={{
        scale: 0,
      }}
      animate={{
        scale: 1,
      }}
      className="w-full  h-auto bg-indigo-400 	 text-center p-5 rounded-lg "
    >
      <div
        id="closeButton"
        className="w-full text-white flex justify-end cursor-pointer"
        onClick={() => onClose()}
      >
        <AiOutlineClose size={25} />
      </div>
      <h1 className="text-4xl font-bold text-white	">Login</h1>
      <div className="flex flex-col gap-4 px-14 py-8">
        <input
          type="email"
          placeholder="Email"
          className="p-2 rounded-md focus:outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 rounded-md focus:outline-none"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={(e) => handleOnSubmit(e)}
          className="px-5 py-2 bg-gray-50 text-indigo-800 hover:bg-indigo-800 hover:text-gray-50 focus:outline-none duration-700 disabled:opacity-75 disabled:cursor-not-allowed"
        >
          Login
        </button>
      </div>
    </motion.div>
  );
};

export default LoginPage;
