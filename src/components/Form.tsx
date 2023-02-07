import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { StepOne } from "./Steps/StepOne";
import { StepTwo } from "./Steps/StepTwo";
import { StepThree } from "./Steps/StepThree";
import { StepFour } from "./Steps/StepFour";
import { StepFive } from "./Steps/StepFive";

export type User = {
  name: string;
  email: string;
  phone: string;
  plan: "arcade" | "advanced" | "pro" | "";
  pricePlan: number;
  planDuration: "monthly" | "yearly";
  addsOn: Map<string, number>;
};

export const Form = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [userData, setUserData] = useState<User>({
    name: "",
    email: "",
    phone: "",
    plan: "arcade",
    pricePlan: 0,
    planDuration: "monthly",
    addsOn: new Map(),
  });

  const handleInputData = (input: any) => (e: any) => {
    const { value } = e.target;

    setUserData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  const handleUserData = (
    key: string,
    value: string | number | Map<string, number>
  ) => {
    setUserData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const backToPlan = () => {
    setActiveStep(2);
  };

  const nextStep = () => {
    setActiveStep(activeStep + 1);
  };

  const prevStep = () => {
    setActiveStep(activeStep - 1);
  };

  switch (activeStep) {
    case 1:
      return (
        <StepOne
          handleUserData={handleInputData}
          nextStep={nextStep}
          userData={userData}
        />
      );
    case 2:
      // return <SelectPlan formik={formik} />;
      return (
        <StepTwo
          handleUserData={handleUserData}
          nextStep={nextStep}
          prevStep={prevStep}
          userData={userData}
        />
      );
    case 3:
      // return <AddsOn formik={formik} />;
      return (
        <StepThree
          handleUserData={handleUserData}
          nextStep={nextStep}
          prevStep={prevStep}
          userData={userData}
        />
      );
    case 4:
      // return <Summary formik={formik} />;
      return (
        <StepFour
          backToPlan={backToPlan}
          nextStep={nextStep}
          prevStep={prevStep}
          userData={userData}
        />
      );
    case 5:
      // return <Summary formik={formik} />;
      return <StepFive />;
    default:
      return <div>404: Not Found</div>;
  }
};
