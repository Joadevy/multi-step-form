import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { StepOne } from "./Steps/StepOne";
import { StepTwo } from "./Steps/StepTwo";
import { StepThree } from "./Steps/StepThree";
import { StepFour } from "./Steps/StepFour";

type user = {
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
  const [userData, setUserData] = useState<user>({
    name: "",
    email: "",
    phone: "",
    plan: "",
    pricePlan: 0,
    planDuration: "monthly",
    addsOn: new Map(),
  });

  // const handlePrice = () => {
  // switchPrices(userData.plan, userData.planDuration);
  // };

  //   const formik = useFormik({
  //     initialValues: {
  //       name: "",
  //       email: "",
  //       phone: "",
  //     },
  //     validationSchema: Yup.object().shape({
  //       name: Yup.string().min(3).required("Name is required"),
  //       email: Yup.string()
  //         .min(5)
  //         .required("Email is required")
  //         .email("Invalid email"),
  //       phone: Yup.string().required("Phone is required"),
  //     }),
  //     onSubmit: () => {
  //       if (activeStep === steps.length - 1) {
  //         console.log("last step");
  //       } else {
  //         setActiveStep((prevStep) => prevStep + 1);
  //       }
  //     },
  //   });

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
          values={userData}
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
      return <StepFour handleUserData={handleInputData} values={userData} />;
    default:
      return <div>404: Not Found</div>;
  }
};
