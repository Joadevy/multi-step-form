import { FC } from "react";

import { AddOn } from "../AddOn";
import { addsOnPricesMonthly, addsOnPricesYearly } from "../../Prices";
import { User } from "../Form";

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

    // checking if value of first name and last name is empty show error else take to step 2
    // if (!isValid(values.name) || !isValid(values.phone) || !isValid(values.email)) {
    //   setError(true);
    // } else {
    //   nextStep();
    // }

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
          console.log(addOn);
          draft.set(
            addOn,
            // (addOn as "online service",
            // "largage storage",
            // "customizable profile")
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

    // console.log(draft);
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
    <div>
      <StepHeader active={3} steps={[1, 2, 3, 4]} />

      <div className="flex flex-col rounded-xl mx-5 my-24 p-8 bg-white">
        <header className="flex flex-col gap-2">
          <h2 className="font-bold text-3xl text-p-marine-blue">
            Pick add-ons
          </h2>
          <p className="text-n-cool-gray text-lg font-medium">
            Add-ons help enhace your gaming experience.
          </p>
        </header>
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
