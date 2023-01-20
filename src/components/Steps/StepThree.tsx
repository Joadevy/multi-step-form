import { FC } from "react";

type props = {
  values: any;
  nextStep: () => void;
  handleUserData: (_: any) => void;
};

export const StepThree: FC<props> = ({ values, nextStep, handleUserData }) => {
  return (
    <div>
      Adds On!
      <button onClick={nextStep}>Siguiente</button>
    </div>
  );
};
