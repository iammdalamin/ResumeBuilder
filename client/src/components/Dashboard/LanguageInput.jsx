import cogoToast from "cogo-toast";
import React, { useEffect, useState } from "react";
import { AiFillPlusCircle, AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { info } from "../../redux/resume";

const LanguageInput = () => {
  const resume = useSelector((state) => state.resume.value);
  const dispatch = useDispatch();
  const [language, setLanguage] = useState("");
  const [languages, setLanguages] = useState([]);

  const handleAddLanguages = async (e) => {
    e.preventDefault();
    if (!language.trim()) {
      cogoToast.warn("Please insert a language ");
    } else {
      setLanguages([...languages, language]);
      setLanguage("");
    }
  };
  const handleDelete = (e) => {
    const newList = languages.filter((skill) => skill != e);
    setLanguages(newList);
  };
  console.log("languages", resume);

  useEffect(() => {
    dispatch(
      info({
        ...resume,
        languages: languages,
      })
    );
  }, [languages]);
  return (
    <>
      <div className="w-1/2 bg-gray-900 h-auto text-white rounded-xl py-12 px-4 md:px-10 flex flex-col ">
        <div class="relative float-label-input ">
          <input
            type="text"
            name="language"
            placeholder=" "
            autoComplete="off"
            className=" resumeInput"
            value={language}
            onChange={(e) => setLanguage(e.target.value.toUpperCase())}
          />
          <label
            for="name"
            className="absolute top-3 left-0 text-white pointer-events-none transition duration-400 ease-in-out bg-transparent  "
          >
            Language
          </label>

          <span
            className="absolute mt-2 cursor-pointer top-0 right-0 block"
            onClick={(e) => handleAddLanguages(e)}
          >
            {" "}
            <AiFillPlusCircle size={25} />
          </span>
        </div>

        <div className="flex flex-wrap gap-2 text-sm ">
          {languages?.map((language, i) => {
            return (
              <div
                key={i}
                className="bg-blue-100 text-blue-800  font-medium  px-3.5 py-1.5 rounded flex justify-center items-center transition-all"
              >
                {language}
                <i
                  className="p-1 cursor-pointer"
                  onClick={() => handleDelete(language)}
                >
                  <AiOutlineClose size={17} />
                </i>
              </div>
            );
          })}
          {!languages && <h1>Add some language</h1>}
        </div>
      </div>
    </>
  );
};

export default LanguageInput;
