import { ChangeEventHandler, FC, useState } from "react";

import { Plan } from "../Plan";
import arcadeImg from "../../assets/images/icon-arcade.svg";
import advancedImg from "../../assets/images/icon-advanced.svg";
import proImg from "../../assets/images/icon-pro.svg";

import { StepHeader } from "./StepHeader";

type props = {
  userData: any;
  nextStep: () => void;
  prevStep: () => void;
  handleUserData: (_: string, __: string) => void;
};

export const StepTwo: FC<props> = ({
  userData,
  nextStep,
  prevStep,
  handleUserData,
}) => {
  const submitUserData = (e: any) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to step 2
    // if (!isValid(values.name) || !isValid(values.phone) || !isValid(values.email)) {
    //   setError(true);
    // } else {
    //   nextStep();
    // }

    nextStep();
  };

  const isActive = (plan: string) => {
    return plan === userData.plan;
  };

  return (
    <div>
      <StepHeader active={2} steps={[1, 2, 3, 4]} />
      <div className="flex flex-col rounded-xl mx-5 my-24 shadow p-8 bg-white">
        <header className="flex flex-col gap-2">
          <h2 className="font-bold text-3xl text-p-marine-blue">
            Select your plan
          </h2>
          <p className="text-n-cool-gray text-lg font-medium">
            You have the option of monthly or yearly biling.
          </p>
        </header>
        <form className="flex flex-col gap-4 mt-6" onSubmit={submitUserData}>
          <Plan
            active={isActive("arcade")}
            handlePlan={handleUserData}
            img={arcadeImg}
            name={"Arcade"}
            price={9}
            type={userData.planDuration}
          />
          <Plan
            active={isActive("advanced")}
            handlePlan={handleUserData}
            img={advancedImg}
            name={"Advanced"}
            price={12}
            type={userData.planDuration}
          />
          <Plan
            active={isActive("pro")}
            handlePlan={handleUserData}
            img={proImg}
            name={"Pro"}
            price={15}
            type={userData.planDuration}
          />

          {/* <label
            className="text-p-marine-blue font-medium text-base flex flex-col gap-1"
            htmlFor="name"
          >
            Name
            <input
              required
              className="rounded-sm border-2 border-n-light-gray p-1"
              defaultValue={values.name}
              id="name"
              placeholder="e.g. Stephen King"
              type="text"
              onChange={handleFormData("name")}
            />
          </label>

          <label
            className="text-p-marine-blue font-medium text-base flex flex-col gap-1"
            htmlFor="email"
          >
            Email Address
            <input
              required
              className="rounded-sm border-2 border-n-light-gray p-1"
              defaultValue={values.email}
              id="email"
              placeholder="e.g. stephenking@lorem.com"
              type="text"
              onChange={handleFormData("email")}
            />
          </label> */}
          <button
            className="absolute z-20 bottom-6 left-6 text-n-cool-gray text-lg hover:text-p-marine-blue transition-colors"
            onClick={prevStep}
          >
            Go Back
          </button>
          <input
            className="absolute z-20 bottom-4 right-6 w-3/12 rounded-md px-4 py-3 bg-p-marine-blue text-white font-bold cursor-pointer hover:opacity-70 transition-colors"
            type="submit"
            value={"Next Step"}
          />
        </form>
      </div>
      {/* Select plan!
      <button onClick={nextStep}>Siguiente</button> */}
    </div>
  );
};
