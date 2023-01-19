import React, { FC } from "react";

type props = {
  values: any;
  handleFormData: (_: any) => void;
};

export const StepFour: FC<props> = ({ values, handleFormData }) => {
  return (
    <div>
      Summary
      <button>Enviar</button>
    </div>
  );
};
