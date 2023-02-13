import { test, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { StepFour } from "../../src/components/Steps/StepFour";
import { User } from "../../src/components/Form";

describe("Step Four", async () => {
  test("should show the correct total-price based on user selections", async () => {
    const userData: User = {
      name: "",
      email: "",
      phone: "",
      plan: "arcade",
      pricePlan: 9,
      planDuration: "monthly",
      addsOn: new Map([
        ["online service", 1],
        ["larger storage", 2],
      ]),
    };

    const { rerender } = render(
      <StepFour
        backToPlan={() => {}}
        nextStep={() => {}}
        prevStep={() => {}}
        userData={userData}
      />
    );

    const totalPrice = screen.getByTestId("total-price");

    expect(totalPrice.textContent).toContain("$12/mo");

    const userData2: User = {
      name: "",
      email: "",
      phone: "",
      plan: "pro",
      pricePlan: 150,
      planDuration: "yearly",
      addsOn: new Map([
        ["online service", 10],
        ["larger storage", 20],
        ["customizable profile", 20],
      ]),
    };

    rerender(
      <StepFour
        backToPlan={() => {}}
        nextStep={() => {}}
        prevStep={() => {}}
        userData={userData2}
      />
    );

    expect(totalPrice.textContent).toContain("$200/yr");
  });

  test("should show the correct plan based on user selections", async () => {
    const userData: User = {
      name: "",
      email: "",
      phone: "",
      plan: "advanced",
      pricePlan: 120,
      planDuration: "yearly",
      addsOn: new Map([
        ["online service", 10],
        ["larger storage", 20],
      ]),
    };

    const { rerender } = render(
      <StepFour
        backToPlan={() => {}}
        nextStep={() => {}}
        prevStep={() => {}}
        userData={userData}
      />
    );

    expect(screen.queryByText(/advanced \(yearly\)/i)).toBeTruthy();

    const userData2: User = {
      name: "",
      email: "",
      phone: "",
      plan: "pro",
      pricePlan: 15,
      planDuration: "monthly",
      addsOn: new Map([
        ["online service", 1],
        ["larger storage", 2],
        ["customizable profile", 2],
      ]),
    };

    rerender(
      <StepFour
        backToPlan={() => {}}
        nextStep={() => {}}
        prevStep={() => {}}
        userData={userData2}
      />
    );

    expect(screen.queryByText(/pro \(monthly\)/i)).toBeTruthy();
  });

  test("should show the correct adds-on based on user selections", async () => {
    const userData: User = {
      name: "",
      email: "",
      phone: "",
      plan: "advanced",
      pricePlan: 120,
      planDuration: "yearly",
      addsOn: new Map([
        ["online service", 10],
        ["larger storage", 20],
      ]),
    };

    const { rerender } = render(
      <StepFour
        backToPlan={() => {}}
        nextStep={() => {}}
        prevStep={() => {}}
        userData={userData}
      />
    );

    expect(screen.queryByText(/online service/i)).toBeTruthy();
    expect(screen.queryByText(/\+\$10\/yr/i)).toBeTruthy();
    expect(screen.queryByText(/larger storage/i)).toBeTruthy();
    expect(screen.queryByText(/\+\$20\/yr/i)).toBeTruthy();

    const userData2: User = {
      name: "",
      email: "",
      phone: "",
      plan: "pro",
      pricePlan: 15,
      planDuration: "monthly",
      addsOn: new Map([
        ["online service", 1],
        ["customizable profile", 2],
      ]),
    };

    rerender(
      <StepFour
        backToPlan={() => {}}
        nextStep={() => {}}
        prevStep={() => {}}
        userData={userData2}
      />
    );

    expect(screen.queryByText(/online service/i)).toBeTruthy();
    expect(screen.queryByText(/\+\$1\/mo/i)).toBeTruthy();
    expect(screen.queryByText(/customizable profile/i)).toBeTruthy();
    expect(screen.queryByText(/\+\$2\/mo/i)).toBeTruthy();
  });
});
