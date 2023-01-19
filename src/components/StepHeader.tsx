import React, { FC } from "react";

type props = {
  steps?: string[];
  actual?: number;
};

export const StepHeader: FC<props> = ({ steps }) => {
  return (
    <header className="h-48 w-full absolute top-0 -z-10 bg-mobileHero flex">
      <ul className="flex gap-2 border-2 w-full justify-center pt-4 text-white">
        {/* {steps.map((step, index) => (
          <li
            key={step}
            className="rounded-full border-2 border-black h-10 w-10"
          >
            index
          </li>
        ))} */}
        <li className="rounded-full border-2 border-white h-10 w-10 text-center">
          1
        </li>
        <li className="rounded-full border-2 border-white h-10 w-10 text-center">
          2
        </li>
        <li className="rounded-full border-2 border-white h-10 w-10 text-center">
          3
        </li>
        <li className="rounded-full border-2 border-white h-10 w-10 text-center">
          4
        </li>
      </ul>
    </header>
  );
};
