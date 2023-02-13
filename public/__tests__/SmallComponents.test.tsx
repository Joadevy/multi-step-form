import { test, expect } from "vitest";
import { render, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { NextButton } from "../../src/components/Buttons/NextButton";
import Switcher from "../../src/components/Switcher";
import { AddOn } from "../../src/components/AddOn";

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

test("Should change the value of the checked & add to the addsOn Map", async () => {
  let testMap = new Map<string, number>();

  const mockHandleAdd = (title: string, price: number) => {
    testMap.set(title, price);
  };

  render(
    <AddOn
      checked={false}
      desc="test"
      handleAdd={mockHandleAdd}
      handleRemove={() => {}}
      price={0}
      title="title-test"
      type="test"
    />
  );

  const addOnOnlineService: HTMLInputElement = await screen.findByTestId(
    "addon-title-test"
  );

  await userEvent.click(addOnOnlineService);

  await waitFor(() =>
    expect(Array.from(testMap.keys())).toContain("title-test")
  );
});

// test("UI TEST: should show the container with border blue after user clicks on", async () => {
//   render(
//     <AddOn
//       checked={false}
//       desc="test"
//       handleAdd={() => {}}
//       handleRemove={() => {}}
//       price={0}
//       title="title-test"
//       type="test"
//     />
//   );

//   const addOnOnlineService: HTMLInputElement = await screen.findByTestId(
//     "addon-title-test"
//   );

//   await userEvent.click(addOnOnlineService);

//   const testContainer: HTMLDivElement = await screen.findByTestId(
//     "addon-title-test-container"
//   );

//   await waitFor(() => {
//     expect(Array.from(testContainer.classList)).toContain(
//       "border-p-purplish-blue"
//     );
//   });
// });
