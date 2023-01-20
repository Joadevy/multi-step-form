import { FC } from "react";

type props = {
  values: any;
  handleUserData: (_: any) => void;
};

export const StepFour: FC<props> = ({ values, handleUserData }) => {
  return (
    <div>
      Summary
      <button>Enviar</button>
    </div>
  );
};
