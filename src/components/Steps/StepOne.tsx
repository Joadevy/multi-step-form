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

const validEmailRegex = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

const validPhoneRegex = new RegExp(
  /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
);

const validNameRegex = new RegExp(/^[a-zA-Z]+ ?[a-zA-Z]+$/);

export const StepOne: FC<props> = ({ userData, nextStep, handleUserData }) => {
  const [error, setError] = useState<Set<string>>(new Set());
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

  const validateMail = () => {
    if (validEmailRegex.test(userData.email) && !error.has("email")) return;

    if (validEmailRegex.test(userData.email) && error.has("email")) {
      const draft = new Set([...error]);

      draft.delete("email");
      setError(draft);
    }

    if (!validEmailRegex.test(userData.email) && !error.has("email"))
      setError((prev) => new Set([...prev, "email"]));
  };

  const validatePhone = () => {
    if (validPhoneRegex.test(userData.phone) && !error.has("phone")) return;

    if (validPhoneRegex.test(userData.phone) && error.has("phone")) {
      const draft = new Set([...error]);

      draft.delete("phone");
      setError(draft);
    }

    if (!validPhoneRegex.test(userData.phone) && !error.has("phone"))
      setError((prev) => new Set([...prev, "phone"]));
  };

  const validateName = () => {
    if (validNameRegex.test(userData.name) && !error.has("name")) return;

    if (validNameRegex.test(userData.name) && error.has("name")) {
      const draft = new Set([...error]);

      draft.delete("name");
      setError(draft);
    }

    if (!validNameRegex.test(userData.name) && !error.has("name"))
      setError((prev) => new Set([...prev, "name"]));
  };

  const handleBlur = (fieldToValidate: "name" | "email" | "phone") => {
    switch (fieldToValidate) {
      case "email":
        validateMail();
        break;
      case "phone":
        validatePhone();
        break;
      case "name":
        validateName();
        break;
    }
  };

  return (
    <div className="lg:flex lg:my-10 lg:mx-48 gap-5">
      <StepHeader active={1} steps={[1, 2, 3, 4]} />
      <div className="min-h-screen lg:w-[400px] lg:h-[500px] 2xl:w-[700px] 2xl:h-[800px] lg:min-h-0 relative ">
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
                className={
                  "rounded-sm  lg:rounded-md border-2 border-n-light-gray p-1 lg:p-2 lg:h-10 " +
                  (error.has("name")
                    ? " border-p-strawberry-red outline-none focus:border-n-light-gray"
                    : "")
                }
                defaultValue={userData.name}
                id="name"
                placeholder="e.g. Stephen King"
                type="text"
                onBlur={() => handleBlur("name")}
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
                className={
                  "rounded-sm lg:rounded-md border-2 border-n-light-gray p-1 lg:p-2 lg:h-10 " +
                  (error.has("email")
                    ? " border-p-strawberry-red outline-none focus:border-n-light-gray"
                    : "")
                }
                defaultValue={userData.email}
                id="email"
                placeholder="e.g. stephenking@lorem.com"
                type="text"
                onBlur={() => handleBlur("email")}
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
                className={
                  "rounded-sm lg:rounded-md border-2 border-n-light-gray p-1 lg:p-2 lg:h-10 " +
                  (error.has("phone")
                    ? " border-p-strawberry-red outline-none focus:border-n-light-gray"
                    : "")
                }
                defaultValue={userData.phone}
                id="phone"
                placeholder="e.g. +1 234 567 8910"
                type="text"
                onBlur={() => handleBlur("phone")}
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
