import { ChangeEventHandler, FC, useState } from "react";

import { NextButton } from "../Buttons/NextButton";
import { Container } from "../Container";
import { User } from "../Form";
import { Header } from "../Header";

import { StepHeader } from "./StepHeader";

type props = {
  userData: User;
  nextStep: () => void;
  handleUserData: (_: any) => ChangeEventHandler;
};

export const StepOne: FC<props> = ({ userData, nextStep, handleUserData }) => {
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
    <div className="lg:flex lg:my-10 lg:mx-48">
      <StepHeader active={1} steps={[1, 2, 3, 4]} />
      <div className="min-h-screen lg:w-[70%] lg:min-h-0 relative">
        <Container>
          <Header
            desc="Please provide your name, email adress, and phone number."
            title="Personal info"
          />

          <form
            className="flex flex-col gap-4 lg:gap-5 mt-6 lg:mb-24"
            onSubmit={submitFormData}
          >
            <label
              className="text-p-marine-blue font-medium text-base lg:text-sm flex flex-col gap-1"
              htmlFor="name"
            >
              Name
              <input
                required
                className="rounded-sm border-2 border-n-light-gray p-1 lg:p-2 lg:w-1/2 lg:h-10"
                defaultValue={userData.name}
                id="name"
                placeholder="e.g. Stephen King"
                type="text"
                onChange={handleUserData("name")}
              />
            </label>

            <label
              className="text-p-marine-blue font-medium text-base lg:text-sm flex flex-col gap-1"
              htmlFor="email"
            >
              Email Address
              <input
                required
                className="rounded-sm border-2 border-n-light-gray p-1 lg:p-2 lg:w-1/2 lg:h-10"
                defaultValue={userData.email}
                id="email"
                placeholder="e.g. stephenking@lorem.com"
                type="text"
                onChange={handleUserData("email")}
              />
            </label>

            <label
              className="text-p-marine-blue font-medium text-base lg:text-sm flex flex-col gap-1"
              htmlFor="phone"
            >
              Phone Number
              <input
                required
                className="rounded-sm border-2 border-n-light-gray p-1 lg:p-2 lg:w-1/2 lg:h-10"
                defaultValue={userData.phone}
                id="phone"
                placeholder="e.g. +1 234 567 890"
                type="text"
                onChange={handleUserData("phone")}
              />
            </label>
            <NextButton bgColor="bg-p-marine-blue" label="Next Step" />
          </form>
        </Container>
      </div>
    </div>
  );
};
