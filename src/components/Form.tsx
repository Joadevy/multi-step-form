import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";
import { StepFour } from "./StepFour";

const steps = ["Personal info", "Select plan", "Adds on", "Summary"];

export const Form = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
    price: "",
    planDuration: "",
    addsOn: [],
  });

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

    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
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
          handleFormData={handleInputData}
          nextStep={nextStep}
          values={formData}
        />
      );
    case 2:
      // return <SelectPlan formik={formik} />;
      return (
        <StepTwo
          handleFormData={handleInputData}
          nextStep={nextStep}
          prevStep={prevStep}
          values={formData}
        />
      );
    case 3:
      // return <AddsOn formik={formik} />;
      return (
        <StepThree
          handleFormData={handleInputData}
          nextStep={nextStep}
          values={formData}
        />
      );
    case 4:
      // return <Summary formik={formik} />;
      return <StepFour handleFormData={handleInputData} values={formData} />;
    default:
      return <div>404: Not Found</div>;
  }
};
