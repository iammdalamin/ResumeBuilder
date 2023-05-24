import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { back, next } from "../../redux/page";
import { info } from "../../redux/resume";

const NavigationButtons = () => {
  const page = useSelector((state) => state.page.value);
  const user = useSelector((state) => state.resume.value);
  const dispatch = useDispatch();
  const nextClick = () => {
    console.log(page);
    dispatch(info({ ...user, nextClick: true }));
    if (page == 0) {
      dispatch(next());
      dispatch(info({ ...user, nextClick: false }));
    }
    if (page != 0) {
      dispatch(next());
    }
  };
  return (
    <div className={page == 0 ? "navigation btnRight" : "navigation"}>
      {page != 0 && (
        <button className="btn1" onClick={() => dispatch(back())}>
          Go Back
        </button>
      )}
      <button className="btn2" onClick={nextClick}>
        {page == 3 ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
};

export default NavigationButtons;
