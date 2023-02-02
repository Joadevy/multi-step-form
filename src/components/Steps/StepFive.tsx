import { FC } from "react";

import thanksImg from "../../assets/images/icon-thank-you.svg";

import { StepHeader } from "./StepHeader";

export const StepFive: FC = () => {
  return (
    <div className="lg:flex lg:my-10 lg:mx-48 gap-5">
      <StepHeader active={4} steps={[1, 2, 3, 4]} />

      <div
        className="flex flex-col rounded-xl mx-5 my-28 p-8 bg-white 
       lg:mx-0 lg:my-0 lg:p-0 lg:w-[400px] lg:h-[500px] lg:min-h-0 relative lg:items-center lg:justify-center "
      >
        <header className="flex flex-col mt-10 gap-3 items-center">
          <div className="w-20 h-20 mb-3">
            <img alt="Thanks for your order!" src={thanksImg} />
          </div>
          <h2 className="font-bold text-3xl text-p-marine-blue">Thank you!</h2>
          <p className="text-n-cool-gray text-xl font-normal text-center lg:text-base">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </header>
      </div>
    </div>
  );
};
