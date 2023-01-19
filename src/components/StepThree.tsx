import React, { FC } from "react";

type props = {
  values: any;
  nextStep: () => void;
  handleFormData: (_: any) => void;
};

export const StepThree: FC<props> = ({ values, nextStep, handleFormData }) => {
  return (
    <div>
      Adds On!
      <button onClick={nextStep}>Siguiente</button>
    </div>
  );
};
