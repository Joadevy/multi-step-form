import React, { FC } from "react";

type props = {
  values: any;
  nextStep: () => void;
  handleFormData: (_: any) => void;
};

export const StepTwo: FC<props> = ({ values, nextStep, handleFormData }) => {
  return (
    <div>
      Select plan!
      <button onClick={nextStep}>Siguiente</button>
    </div>
  );
};
