import { ChangeEventHandler, FC, useState } from "react";

import { StepHeader } from "./StepHeader";

type props = {
  values: any;
  nextStep: () => void;
  handleFormData: (_: any) => ChangeEventHandler;
};

export const StepOne: FC<props> = ({ values, nextStep, handleFormData }) => {
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
      <StepHeader />
      <div className="relative flex flex-col rounded-lg mx-5 my-24 shadow p-5 bg-white">
        <header>
          <h2>Personal info</h2>
          <p>Please provide your name, email adress and phone number.</p>
        </header>
        <form className="flex flex-col gap-2 mt-4" onSubmit={submitFormData}>
          <label htmlFor="name">Name</label>
          <input
            required
            className="rounded-sm border-2 border-n-light-gray p-1"
            defaultValue={values.name}
            id="name"
            placeholder="e.g. Stephen King"
            type="text"
            onChange={handleFormData("name")}
          />
          <label htmlFor="email">Email Address</label>
          <input
            required
            className="rounded-sm border-2 border-n-light-gray p-1"
            defaultValue={values.email}
            id="email"
            placeholder="e.g. stephenking@lorem.com"
            type="text"
            onChange={handleFormData("email")}
          />
          <label htmlFor="phone">Phone Number</label>
          <input
            required
            className="rounded-sm border-2 border-n-light-gray p-1"
            defaultValue={values.phone}
            id="phone"
            placeholder="e.g. +1 234 567 890"
            type="text"
            onChange={handleFormData("phone")}
          />
          <input
            className="mt-24 w-2/6 self-end rounded-lg px-2 py-3 bg-p-marine-blue text-white font-bold"
            type="submit"
            value={"Next Step"}
          />
        </form>
      </div>
    </div>
  );
};
