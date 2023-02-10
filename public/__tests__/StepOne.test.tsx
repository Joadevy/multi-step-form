import { test, describe, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import { StepOne } from "../../src/components/Steps/StepOne";

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
    expect(screen.getByText(/personal info/i)).toBeDefined();
  });

  test("should show a button for continue to the next step", async () => {
    const nextBtn: HTMLInputElement = await screen.findByTestId("next-btn");

    expect(nextBtn.value).toBe("Next Step");
  });

  test("Couldn't pass to 2nd step before fill the name field", async () => {
    const nextBtn = await screen.findByTestId("next-btn");
    const inputName = await screen.findByTestId("input-name");

    fireEvent.click(nextBtn);

    expect(fireEvent.focus(inputName));
  });

  test("should show an error message if type an incorrect name", async () => {
    const inputName = await screen.findByTestId("input-name");

    fireEvent.focusIn(inputName);
    fireEvent.focusOut(inputName);

    expect(screen.getByText(/please enter a valid name/i)).toBeDefined();
  });

  test("should show invalid email alert", async () => {
    const inputEmail: HTMLInputElement = await screen.findByTestId(
      "input-email"
    );
    const inputPhone: HTMLInputElement = await screen.findByTestId(
      "input-phone"
    );

    fireEvent.focusIn(inputEmail);
    fireEvent.focusOut(inputEmail);
    fireEvent.focusIn(inputPhone);
    fireEvent.focusOut(inputPhone);

    expect(screen.getByText(/valid email/i)).toBeDefined();
    expect(screen.getByText(/valid phone/i)).toBeDefined();
  });
});
