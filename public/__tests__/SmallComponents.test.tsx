import { test, expect } from "vitest";
import { render, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { NextButton } from "../../src/components/Buttons/NextButton";
import Switcher from "../../src/components/Switcher";

test("should show a 'Next Step' button", async () => {
  const step = render(<NextButton bgColor="" label="Next Step" />);

  // @ts-ignore: input properties aren't necesary in this case
  const nextBtn: HTMLInputElement = await step.findByTestId("next-btn");

  expect(nextBtn.value).toMatch(/Next Step/i);
  step.unmount();
});

test("Should change the value in the switcher", async () => {
  let value = false;
  const changeValue = () => {
    value = !value;
  };

  render(<Switcher handlerStatus={changeValue} />);
  const switcher: HTMLInputElement = await screen.findByTestId("switcher");

  await userEvent.click(switcher);

  await waitFor(() => {
    expect(value).toBe(true);
  });
});
