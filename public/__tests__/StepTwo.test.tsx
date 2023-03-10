import { test, describe, expect, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { StepTwo } from "../../src/components/Steps/StepTwo";
import { User } from "../../src/components/Form";

describe("Step Two", async () => {
  const userData: User = {
    name: "",
    email: "",
    phone: "",
    plan: "arcade",
    pricePlan: 0,
    planDuration: "monthly",
    addsOn: new Map(),
  };

  beforeEach(() => {
    const handleUser = (x: string, y: string | number) => {
      // @ts-ignore
      userData[x] = y;
    };

    render(
      <StepTwo
        handleUserData={handleUser}
        nextStep={() => {}}
        prevStep={() => {}}
        userData={userData}
      />
    );
  });

  test("should show the pro plan as active", async () => {
    const planPro: HTMLInputElement = await screen.findByTestId("plan-Pro");

    await userEvent.click(planPro);

    expect(userData.plan).toBe("pro");
  });

  test("should show the advanced plan as active", async () => {
    const planAdvanced: HTMLInputElement = await screen.findByTestId(
      "plan-Advanced"
    );

    await userEvent.click(planAdvanced);

    expect(userData.plan).toBe("advanced");
  });

  test("should show the yearly prices when switch to", async () => {
    const switcher: HTMLInputElement = await screen.findByTestId("switcher");

    await userEvent.click(switcher);

    const renderAfterClick = render(
      <StepTwo
        handleUserData={() => {}}
        nextStep={() => {}}
        prevStep={() => {}}
        userData={userData}
      />
    );

    await waitFor(() => {
      expect(renderAfterClick.getAllByText(/\/yr/i)).toHaveLength(3);
      expect(userData.planDuration).toBe("yearly");
    });
  });
});
