import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Stepper, Step } from "tailwindcss";

const StepperComponent = () => {
  const { steps, currentStep } = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const handleNextStep = () => {
    dispatch({
      type: "UPDATE_CURRENT_STEP",
      payload: currentStep + 1,
    });
  };

  const handlePreviousStep = () => {
    dispatch({
      type: "UPDATE_CURRENT_STEP",
      payload: currentStep - 1,
    });
  };

  return (
    <Stepper>
      {steps.map((step, index) => (
        <Step key={index}>
          {step.title}
          <button onClick={handleNextStep}>Next</button>
          {index !== steps.length - 1 && (
            <button onClick={handlePreviousStep}>Previous</button>
          )}
        </Step>
      ))}
    </Stepper>
  );
};

export default StepperComponent;
