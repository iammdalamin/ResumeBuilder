import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateResumeMutation } from "../../feature/api";
import { back, next } from "../../redux/page";
import { info } from "../../redux/resume";

const NavigationButtons = ({ type }) => {
  const [registration, result] = useUpdateResumeMutation();

  const page = useSelector((state) => state.page.value);
  const resume = useSelector((state) => state.resume.value);
  const dispatch = useDispatch();
  const nextClick = (e) => {
    console.log("value", e.target.value);
    dispatch(info({ ...resume, nextClick: true }));
    if (page == 0) {
      dispatch(next());
      dispatch(info({ ...resume, nextClick: false }));
    }
    if (page != 0) {
      dispatch(next());
    }
  };

  const submitHandle = async (resume) => {
    await registration(resume);
  };
  console.log(result);
  return (
    <div className="flex gap-4 mt-5">
      {page != 0 && (
        <button
          className="px-6 py-2 bg-red-700 text-white"
          onClick={() => dispatch(back())}
        >
          Go Back
        </button>
      )}
      {page == 4 ? (
        <button
          className="px-6 py-2 bg-yellow-700 text-white"
          onClick={(e) => {
            nextClick(e), submitHandle(resume);
          }}
        >
          Confirm
        </button>
      ) : (
        <button
          className="px-6 py-2 bg-green-700 text-white"
          onClick={(e) => {
            nextClick(e), submitHandle(resume);
          }}
        >
          Next Step
        </button>
      )}
    </div>
  );
};

export default NavigationButtons;
