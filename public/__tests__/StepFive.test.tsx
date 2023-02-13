import { test, describe, expect } from "vitest";
import { render } from "@testing-library/react";

import { StepFive } from "../../src/components/Steps/StepFive";

describe("Step Five", async () => {
  test("should render correctly with the thanks information", async () => {
    const { asFragment } = render(<StepFive />);

    expect(asFragment()).toMatchSnapshot();
  });
});
