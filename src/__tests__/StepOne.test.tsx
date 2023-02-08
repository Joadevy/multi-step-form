import { test, describe, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";

import { StepOne } from "../components/Steps/StepOne";
import { NextButton } from "../components/Buttons/NextButton";

test("should show a 'Next Step' button", async () => {
  const step = render(<NextButton bgColor="" label="Next Step" />);

  // @ts-ignore: input properties aren't necesary in this case
  const nextBtn: HTMLInputElement = await step.findByTestId("next-btn");

  expect(nextBtn.value).toBe("Next Step");
  step.unmount();
});

describe("Step One", async () => {
  beforeEach(() => {
    render(
      <StepOne
        // @ts-ignore: handleUser isn't necesary in these tests.
        handleUserData={() => {}}
        nextStep={() => {}}
        userData={{
          name: "",
          email: "",
          phone: "",
          plan: "arcade",
          pricePlan: 0,
          planDuration: "monthly",
          addsOn: new Map(),
        }}
      />
    );
  });

  test("should show the correct title", async () => {
    expect(screen.getByText("Personal info")).toBeDefined();
  });

  test("should show a button for continue to the next step", async () => {
    const nextBtn: HTMLInputElement = await screen.findByTestId("next-btn");

    expect(nextBtn.value).toBe("Next Step");
  });

  test("Couldn't pass to 2nd step before fill the fields", async () => {
    const nextBtn = await screen.findByTestId("next-btn");

    // expect(nextBtn.value).toBe("Next Ste");/
  });
});
