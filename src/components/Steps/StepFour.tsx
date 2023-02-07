import { FC } from "react";

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
  backToPlan: () => void;
};

const capitalizeFirst = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const StepFour: FC<props> = ({
  userData,
  backToPlan,
  prevStep,
  nextStep,
}) => {
  const submitUserData = (e: any) => {
    e.preventDefault();

    if (userData.plan) {
      nextStep();
    }
  };

  const getTotalPrice = (): number => {
    let total = 0;

    total += userData.pricePlan;
    userData.addsOn.forEach((price: number) => {
      total += price;
    });

    return total;
  };

  return (
    <div className="lg:flex lg:my-10 lg:mx-48 gap-5 lg:p-4 lg:shadow-md bg-white lg:rounded-lg">
      <StepHeader active={4} steps={[1, 2, 3, 4]} />
      <div className="min-h-screen lg:w-[400px] lg:h-[500px] 2xl:w-[700px] 2xl:h-[800px]  lg:min-h-0 relative ">
        <Container>
          <Header
            desc="Double-check everything looks OK before confirming."
            title="Finishing up"
          />

          <form
            className="flex flex-col gap-4 mt-6 lg:p-4"
            onSubmit={submitUserData}
          >
            <ul className="flex flex-col gap-4">
              <li className="flex justify-between items-center mb-3">
                <div>
                  <h3 className="font-bold text-p-marine-blue text-lg lg:text-base">{`${capitalizeFirst(
                    userData.plan
                  )} (${capitalizeFirst(userData.planDuration)})`}</h3>
                  <button onClick={backToPlan}>
                    <p className="underline text-n-cool-gray text-lg lg:text-base hover:text-p-purplish-blue transition-colors">
                      Change
                    </p>
                  </button>
                </div>
                <p className="font-bold text-p-marine-blue text-lg lg:text-base mr-2">
                  {userData.planDuration === "monthly"
                    ? `$${userData.pricePlan}/mo`
                    : `$${userData.pricePlan}/yr`}
                </p>
              </li>

              {Array.from(userData.addsOn).map(
                (addOn: [string, number], index: number) => (
                  <li
                    key={index}
                    className="flex justify-between items-center "
                  >
                    <div>
                      <h3 className="font-medium text-n-cool-gray text-lg lg:text-base">
                        {capitalizeFirst(
                          addOn[0] as
                            | "online service"
                            | "larger storage"
                            | "customizable profile"
                        )}
                      </h3>
                    </div>
                    <p className="font-bold text-p-marine-blue text-lg lg:text-base mr-2">
                      {userData.planDuration === "monthly"
                        ? `+$${addOn[1] as number}/mo`
                        : `+$${addOn[1] as number}/yr`}
                    </p>
                  </li>
                )
              )}

              <li className="flex justify-between items-center mt-5 lg:mt-10">
                <div>
                  <h3 className="font-medium text-n-cool-gray text-lg lg:text-base">{`${capitalizeFirst(
                    "total"
                  )} (${
                    userData.planDuration === "monthly"
                      ? "per month"
                      : "per year"
                  })`}</h3>
                </div>
                <p className="font-bold text-p-purplish-blue text-xl lg:text-lg mr-2">
                  {userData.planDuration === "monthly"
                    ? `$${getTotalPrice()}/mo`
                    : `$${getTotalPrice()}/yr`}
                </p>
              </li>
            </ul>
            <GrayButton action={prevStep} label={"Go Back"} />
            <NextButton bgColor="bg-p-purplish-blue" label="Confirm" />
          </form>
        </Container>
      </div>
    </div>
  );
};
