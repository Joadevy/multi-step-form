import { FC } from "react";

import { Plan } from "../Plan";
import arcadeImg from "../../assets/images/icon-arcade.svg";
import advancedImg from "../../assets/images/icon-advanced.svg";
import proImg from "../../assets/images/icon-pro.svg";
import Switcher from "../Switcher";
import { planPricesMonthly, planPricesYearly } from "../../Prices";
import { User } from "../Form";

import { StepHeader } from "./StepHeader";

type props = {
  userData: User;
  nextStep: () => void;
  prevStep: () => void;
  handleUserData: (_: string, __: string | number) => void;
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

    if (userData.plan) {
      switchPrices();
      nextStep();
    }
  };

  const isActive = (plan: string) => {
    return plan === userData.plan;
  };

  const handlePlanDuration = () => {
    userData.planDuration === "monthly"
      ? handleUserData("planDuration", "yearly")
      : handleUserData("planDuration", "monthly");
  };

  const switchPrices = () => {
    userData.planDuration === "monthly"
      ? handleUserData(
          "pricePlan",
          planPricesMonthly[userData.plan as "arcade" | "advanced" | "pro"]
        )
      : handleUserData(
          "pricePlan",
          planPricesYearly[userData.plan as "arcade" | "advanced" | "pro"]
        );
  };

  return (
    <div>
      <StepHeader active={2} steps={[1, 2, 3, 4]} />
      <div className="flex flex-col rounded-xl mx-5 my-28 p-8 bg-white">
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
            monthsFree={2}
            name={"Arcade"}
            price={userData.planDuration === "monthly" ? 9 : 90}
            type={userData.planDuration}
          />
          <Plan
            active={isActive("advanced")}
            handlePlan={handleUserData}
            img={advancedImg}
            monthsFree={2}
            name={"Advanced"}
            price={userData.planDuration === "monthly" ? 12 : 120}
            type={userData.planDuration}
          />
          <Plan
            active={isActive("pro")}
            handlePlan={handleUserData}
            img={proImg}
            monthsFree={2}
            name={"Pro"}
            price={userData.planDuration === "monthly" ? 15 : 150}
            type={userData.planDuration}
          />
          <div className="flex gap-4 absolute bottom-28 self-center">
            <p
              className={
                userData.planDuration === "monthly"
                  ? "text-p-marine-blue font-bold"
                  : " text-n-cool-gray font-bold"
              }
            >
              Monthly
            </p>
            <Switcher handlerStatus={handlePlanDuration} />
            <p
              className={
                userData.planDuration === "yearly"
                  ? "text-p-marine-blue font-bold"
                  : " text-n-cool-gray font-bold"
              }
            >
              Yearly
            </p>
          </div>
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
    </div>
  );
};
