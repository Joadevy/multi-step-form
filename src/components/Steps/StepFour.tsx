import { FC } from "react";

import { User } from "../Form";

import { StepHeader } from "./StepHeader";

type props = {
  userData: User;
  prevStep: () => void;
  nextStep: () => void;
  backToPlan: () => void;

  handleUserData: (_: string, __: Map<string, number> | number) => void;
};

const capitalizeFirst = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const StepFour: FC<props> = ({
  userData,
  handleUserData,
  backToPlan,
  prevStep,
  nextStep,
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
    <div>
      <StepHeader active={4} steps={[1, 2, 3, 4]} />

      <div className="flex flex-col rounded-xl mx-5 my-24 p-8 bg-white">
        <header className="flex flex-col gap-2">
          <h2 className="font-bold text-3xl text-p-marine-blue">
            Finishing up
          </h2>
          <p className="text-n-cool-gray text-lg font-medium">
            Double-check everything looks OK before confirming
          </p>
        </header>
        <form className="flex flex-col gap-4 mt-6" onSubmit={submitUserData}>
          <ul className="flex flex-col gap-4">
            <li className="flex justify-between items-center mb-3">
              <div>
                <h3 className="font-bold text-p-marine-blue text-lg">{`${capitalizeFirst(
                  userData.plan
                )} (${capitalizeFirst(userData.planDuration)})`}</h3>
                <button onClick={backToPlan}>
                  <p className="underline text-n-cool-gray text-lg">Change</p>
                </button>
              </div>
              <p className="font-bold text-p-marine-blue text-lg mr-2">
                {userData.planDuration === "monthly"
                  ? `$${userData.pricePlan}/mo`
                  : `$${userData.pricePlan}/yr`}
              </p>
            </li>

            {Array.from(userData.addsOn).map(
              (addOn: [string, number], index: number) => (
                <li key={index} className="flex justify-between items-center ">
                  <div>
                    <h3 className="font-medium text-n-cool-gray text-lg">
                      {capitalizeFirst(
                        addOn[0] as
                          | "online service"
                          | "larger storage"
                          | "customizable profile"
                      )}
                    </h3>
                  </div>
                  <p className="font-bold text-p-marine-blue text-lg mr-2">
                    {userData.planDuration === "monthly"
                      ? `+$${addOn[1] as number}/mo`
                      : `+$${addOn[1] as number}/yr`}
                  </p>
                </li>
              )
            )}

            <li className="flex justify-between items-center mt-5">
              <div>
                <h3 className="font-medium text-n-cool-gray text-lg">{`${capitalizeFirst(
                  "total"
                )} (${
                  userData.planDuration === "monthly" ? "per month" : "per year"
                })`}</h3>
              </div>
              <p className="font-bold text-p-purplish-blue text-xl mr-2">
                {userData.planDuration === "monthly"
                  ? `$${getTotalPrice()}/mo`
                  : `$${getTotalPrice()}/yr`}
              </p>
            </li>
          </ul>
          <button
            className="absolute z-20 bottom-6 left-6 text-n-cool-gray text-lg hover:text-p-marine-blue transition-colors"
            onClick={prevStep}
          >
            Go Back
          </button>
          <input
            className="absolute z-20 bottom-4 right-6 w-3/12 rounded-md px-4 py-3 bg-p-purplish-blue text-white font-bold cursor-pointer hover:opacity-70 transition-colors"
            type="submit"
            value={"Confirm"}
          />
        </form>
      </div>
    </div>
  );
};
