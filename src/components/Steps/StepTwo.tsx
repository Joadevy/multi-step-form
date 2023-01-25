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
      <div className="min-h-screen relative border border-transparent">
        <Container>
          <Header
            desc="You have the option of monthly or yearly biling."
            title="Select your plan"
          />

          <form className="flex flex-col gap-4 " onSubmit={submitUserData}>
            <div className="flex flex-col gap-4 mb-8">
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
            <GrayButton action={prevStep} label={"Go Back"} />
            <NextButton bgColor="bg-p-marine-blue" label="Next Step" />
          </form>
        </Container>
      </div>
    </div>
  );
};
