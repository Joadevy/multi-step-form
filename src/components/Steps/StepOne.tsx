import { ChangeEventHandler, FC, useState } from "react";

import { StepHeader } from "./StepHeader";

type props = {
  values: any;
  nextStep: () => void;
  handleUserData: (_: any) => ChangeEventHandler;
};

export const StepOne: FC<props> = ({ values, nextStep, handleUserData }) => {
  const [error, setError] = useState(false);
  const submitFormData = (e: any) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to step 2
    // if (!isValid(values.name) || !isValid(values.phone) || !isValid(values.email)) {
    //   setError(true);
    // } else {
    //   nextStep();
    // }

    nextStep();
  };

  return (
    <div>
      <StepHeader active={1} steps={[1, 2, 3, 4]} />
      <div className="flex flex-col rounded-xl mx-5 my-24 p-8 bg-white">
        <header className="flex flex-col gap-2">
          <h2 className="font-bold text-3xl text-p-marine-blue">
            Personal info
          </h2>
          <p className="text-n-cool-gray text-lg font-medium">
            Please provide your name, email adress, and phone number.
          </p>
        </header>
        <form className="flex flex-col gap-4 mt-6" onSubmit={submitFormData}>
          <label
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
              onChange={handleUserData("name")}
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
              onChange={handleUserData("email")}
            />
          </label>

          <label
            className="text-p-marine-blue font-medium text-base flex flex-col gap-1"
            htmlFor="phone"
          >
            Phone Number
            <input
              required
              className="rounded-sm border-2 border-n-light-gray p-1"
              defaultValue={values.phone}
              id="phone"
              placeholder="e.g. +1 234 567 890"
              type="text"
              onChange={handleUserData("phone")}
            />
          </label>

          <input
            className="absolute z-20 bottom-4 right-6 w-3/12 rounded-md px-4 py-3 bg-p-marine-blue text-white font-bold cursor-pointer hover:opacity-50"
            type="submit"
            value={"Next Step"}
          />
        </form>
      </div>
    </div>
  );
};
