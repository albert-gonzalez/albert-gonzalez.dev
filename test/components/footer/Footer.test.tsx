import { screen } from "@testing-library/dom";
import React from "react";
import { Footer } from "../../../src/components/footer/Footer";
import { render } from "../../test-utils";

describe("Footer", () => {
  render(<Footer />);

  test("should render correctly", async () => {
    expect(await screen.findByText("footer")).not.toBeNull();
  });
});
