import React, { FC } from "react";

type props = {
  steps: number[];
  active: number;
};

const stepDescription = ["YOUR INFO", "SELECT PLAN", "ADDS-ON", "SUMMARY"];

export const StepHeader: FC<props> = ({ steps, active }) => {
  return (
    <header className="h-48 w-full absolute lg:w-[300px] lg:relative lg:h-auto top-0 -z-10 bg-mobileHero lg:bg-desktopHero flex bg-cover lg:bg-contain bg-no-repeat">
      <ul className="flex lg:flex-col gap-4 lg:gap-8 w-full justify-center lg:justify-start pt-10 lg:pl-10 text-white">
        {steps.map((step) => (
          <li key={step} className="lg:flex lg:gap-2 lg:items-center">
            <div
              className={
                "rounded-full border border-white h-9 w-9 lg:h-8 lg:w-8 flex justify-center items-center " +
                (active === step ? "bg-white text-p-marine-blue" : "")
              }
            >
              <p>{step}</p>
            </div>
            <div className="hidden lg:block text-white text-sm lg:text-xs">
              <p className=" text-p-pastel-blue">{`STEP ${step}`}</p>
              <p className="font-bold">{stepDescription[step - 1]}</p>
            </div>
          </li>
        ))}
      </ul>
    </header>
  );
};
