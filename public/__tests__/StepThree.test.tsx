import { test, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { StepThree } from "../../src/components/Steps/StepThree";
import { User } from "../../src/components/Form";

describe("Step Three", async () => {
  const userData: User = {
    name: "",
    email: "",
    phone: "",
    plan: "arcade",
    pricePlan: 0,
    planDuration: "monthly",
    addsOn: new Map(),
  };

  // test("should add blue border to container when online service addOn is clicked", async () => {
  //   const handleUser = (x: string, y: number | Map<string, number>) => {
  //     // @ts-ignore
  //     userData[x] = y;
  //   };

  //   render(
  //     <StepThree
  //       handleUserData={handleUser}
  //       nextStep={() => {}}
  //       prevStep={() => {}}
  //       userData={userData}
  //     />
  //   );

  //   const addOnInput: HTMLInputElement = await screen.findByTestId(
  //     "addon-Online service"
  //   );

  //   const addOnContainer: HTMLDivElement = await screen.findByTestId(
  //     "addon-Online service-container"
  //   );

  //   const addOnContainer2: HTMLDivElement = await screen.findByTestId(
  //     "addon-Larger storage-container"
  //   );

  //   await userEvent.click(addOnInput);

  //   await waitFor(() => {
  //     // expect(
  //     //   addOnContainer.classList.contains("border-p-purplish-blue")
  //     // ).toBeTruthy();
  //     // expect(addOnInput.classList.contains("border-p-purplish-blue"));
  //     expect(Array.from(addOnContainer.classList)).toContain(
  //       "border-p-purplish-blue"
  //     );
  //   });
  // });

  test("should show the correct prices whether monthly/yearly plan", async () => {
    const userData: User = {
      name: "",
      email: "",
      phone: "",
      plan: "arcade",
      pricePlan: 0,
      planDuration: "monthly",
      addsOn: new Map(),
    };
    const handleUser = (x: string, y: number | Map<string, number>) => {
      // @ts-ignore
      userData[x] = y;
    };

    const { rerender } = render(
      <StepThree
        handleUserData={handleUser}
        nextStep={() => {}}
        prevStep={() => {}}
        userData={userData}
      />
    );

    expect(screen.queryAllByText(/\/mo/)).toHaveLength(3);

    const userData2: User = {
      name: "",
      email: "",
      phone: "",
      plan: "arcade",
      pricePlan: 0,
      planDuration: "yearly",
      addsOn: new Map(),
    };

    rerender(
      <StepThree
        handleUserData={handleUser}
        nextStep={() => {}}
        prevStep={() => {}}
        userData={userData2}
      />
    );

    expect(screen.queryAllByText(/\/yr/)).toHaveLength(3);
  });
});
