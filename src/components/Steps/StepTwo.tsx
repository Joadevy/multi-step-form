import { FC } from "react";

import { Plan } from "../Plan";
import arcadeImg from "../../assets/images/icon-arcade.svg";
import advancedImg from "../../assets/images/icon-advanced.svg";
import proImg from "../../assets/images/icon-pro.svg";
import Switcher from "../Switcher";
import { planPricesMonthly, planPricesYearly } from "../../Prices";
import { User } from "../Form";
import { GrayButton } from "../Buttons/GrayButton";
import { NextButton } from "../Buttons/NextButton";
import { Container } from "../Container";
import { Header } from "../Header";

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
    <div className="max-h-screen lg:flex lg:my-10 lg:mx-48 gap-5 lg:p-4 lg:shadow-md bg-white lg:rounded-lg">
      <StepHeader active={2} steps={[1, 2, 3, 4]} />
      <div className="lg:w-[400px] lg:h-[500px] 2xl:w-[700px] 2xl:h-[800px] lg:min-h-0 relative ">
        <Container>
          <Header
            desc="You have the option of monthly or yearly biling."
            title="Select your plan"
          />

          <form
            className="flex flex-col gap-4 lg:gap-5 mt-6 lg:mb-24 "
            onSubmit={submitUserData}
          >
            <div className="flex flex-col lg:flex-row gap-4 mb-8 lg:p-4 lg:justify-around">
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
            </div>
            <div className="flex lg:items-center lg:justify-center lg:p-2 lg:rounded-md gap-4 absolute bottom-28 self-center bg-n-alabaster lg:w-full">
              <p
                className={
                  userData.planDuration === "monthly"
                    ? "text-p-marine-blue font-bold"
                    : " text-n-cool-gray font-bold"
                }
              >
                Monthly
              </p>
              <Switcher
                checked={userData.planDuration == "yearly"}
                handlerStatus={handlePlanDuration}
              />
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
            <GrayButton action={prevStep} label={"Go Back"} />
            <NextButton bgColor="bg-p-marine-blue" label="Next Step" />
          </form>
        </Container>
      </div>
    </div>
  );
};
