import { FC } from "react";

import { AddOn } from "../AddOn";
import { addsOnPricesMonthly, addsOnPricesYearly } from "../../Prices";
import { User } from "../Form";
import { GrayButton } from "../Buttons/GrayButton";
import { NextButton } from "../Buttons/NextButton";
import { Container } from "../Container";
import { Header } from "../Header";

import { StepHeader } from "./StepHeader";

type props = {
  userData: User;
  prevStep: () => void;
  nextStep: () => void;
  handleUserData: (_: string, __: Map<string, number> | number) => void;
};

export const StepThree: FC<props> = ({
  userData,
  prevStep,
  nextStep,
  handleUserData,
}) => {
  const submitUserData = (e: any) => {
    e.preventDefault();

    if (userData.plan) {
      updatePrices();
      nextStep();
    }
  };

  const handleAdd = (title: string, price: number) => {
    const addsOn = new Map(userData.addsOn as Map<string, number>);

    const exist = addsOn.has(title);

    if (!exist) {
      addsOn.set(title, price);
      handleUserData("addsOn", addsOn);
    }
  };

  const updatePrices = () => {
    const draft: Map<string, number> = new Map(userData.addsOn);

    userData.planDuration === "monthly"
      ? draft.forEach((_, addOn) => {
          draft.set(
            addOn,
            addsOnPricesMonthly[
              addOn as
                | "online service"
                | "larger storage"
                | "customizable profile"
            ]
          );
        })
      : draft.forEach((_, addOn) =>
          draft.set(
            addOn,
            addsOnPricesYearly[
              addOn as
                | "online service"
                | "larger storage"
                | "customizable profile"
            ]
          )
        );

    handleUserData("addsOn", draft);
  };

  const handleRemove = (title: string) => {
    const addsOn = new Map(userData.addsOn as Map<string, number>);
    const exist = addsOn.has(title);

    if (exist) {
      addsOn.delete(title);
      handleUserData("addsOn", addsOn);
    }
  };

  return (
    <div className="lg:flex lg:my-10 lg:mx-48 gap-5 lg:p-4 lg:shadow-md bg-white lg:rounded-lg">
      <StepHeader active={3} steps={[1, 2, 3, 4]} />
      <div className="min-h-screen lg:w-[400px] lg:h-[500px] 2xl:w-[700px] 2xl:h-[800px]  lg:min-h-0 relative lg:p-4  ">
        <Container>
          <Header
            desc="Add-ons help enhace your gaming experience."
            title="Pick add-ons"
          />

          <form className="flex flex-col gap-4 mt-6" onSubmit={submitUserData}>
            <ul className="flex flex-col gap-5">
              <AddOn
                checked={userData.addsOn.has("online service")}
                desc={"Access to multiplayer games"}
                handleAdd={handleAdd}
                handleRemove={handleRemove}
                price={userData.planDuration === "monthly" ? 1 : 10}
                title={"Online service"}
                type={userData.planDuration}
              />
              <AddOn
                checked={userData.addsOn.has("larger storage")}
                desc={"Extra 1TB of cloud save"}
                handleAdd={handleAdd}
                handleRemove={handleRemove}
                price={userData.planDuration === "monthly" ? 2 : 20}
                title={"Larger storage"}
                type={userData.planDuration}
              />
              <AddOn
                checked={userData.addsOn.has("customizable profile")}
                desc={"Custom theme on your profile"}
                handleAdd={handleAdd}
                handleRemove={handleRemove}
                price={userData.planDuration === "monthly" ? 2 : 20}
                title={"Customizable profile"}
                type={userData.planDuration}
              />
            </ul>
            <GrayButton action={prevStep} label={"Go Back"} />
            <NextButton bgColor="bg-p-marine-blue" label="Next Step" />
          </form>
        </Container>
      </div>
    </div>
  );
};
