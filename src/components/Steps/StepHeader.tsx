import React, { FC } from "react";

type props = {
  steps: number[];
  active: number;
};

export const StepHeader: FC<props> = ({ steps, active }) => {
  return (
    <header className="h-48 w-full absolute top-0 -z-10 bg-mobileHero flex bg-cover bg-no-repeat">
      <ul className="flex gap-4 w-full justify-center pt-7 text-white">
        {steps.map((step) => (
          <li
            key={step}
            className={
              "rounded-full border border-white h-9 w-9 flex justify-center items-center " +
              (active === step ? "bg-white text-p-marine-blue" : "")
            }
          >
            {step}
          </li>
        ))}
      </ul>
    </header>
  );
};
