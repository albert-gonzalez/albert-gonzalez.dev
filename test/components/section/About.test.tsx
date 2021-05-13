import React from "react";
import { screen } from "@testing-library/dom";
import { About } from "../../../src/components/section/About";
import { render } from "../../test-utils";

describe("About", () => {
  beforeEach(() => {
    render(<About />);
  });
  test("should render correctly", async () => {
    expect((await screen.findByAltText("GitHub")).closest("a")).not.toBeNull();
    expect(
      (await screen.findByAltText("LinkedIn")).closest("a")
    ).not.toBeNull();
    expect((await screen.findByAltText("Twitter")).closest("a")).not.toBeNull();

    expect(await screen.findByText("about")).not.toBeNull();
    expect(await screen.findByText("aboutText")).not.toBeNull();
  });
});
