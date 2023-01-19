import React, { FC, useState } from "react";

type props = {
  values: any;
  nextStep: () => void;
  handleFormData: (_: any) => void;
};

export const StepOne: FC<props> = ({ values, nextStep, handleFormData }) => {
  const [error, setError] = useState(false);
  const submitFormData = (e: any) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to step 2
    if (!values.name || !values.phone || !values.email) {
      setError(true);
    } else {
      nextStep();
    }
  };

  return (
    <form onSubmit={submitFormData}>
      <label htmlFor="name">Name:</label>
      <input defaultValue={values.name} id="name" type="text" />

      <label htmlFor="email">Email:</label>
      <input defaultValue={values.email} id="email" type="text" />

      <label htmlFor="phone">Phone:</label>
      <input defaultValue={values.phone} id="phone" type="text" />

      <input type="submit" value={"next"} />
    </form>
    // <div>
    //   PersonalInfo!
    //   <button onClick={nextStep}>Siguiente</button>
    // </div>
  );
};
