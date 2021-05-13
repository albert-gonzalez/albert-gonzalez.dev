import { screen } from "@testing-library/dom";
import React from "react";
import { Bar } from "../../../src/components/bar/Bar";
import { render } from "../../test-utils";

describe("Bar", () => {
  beforeEach(() => {
    render(<Bar />);
  });

  test("should render correctly", async () => {
    const logo = await screen.findByAltText("Logo");
    const github = await screen.findByAltText("Github");
    const caFlag = await screen.findByAltText("ca");

    expect(logo.closest("a")).not.toBeNull();
    expect(github.closest("a")).not.toBeNull();
    expect(caFlag.closest("a")).not.toBeNull();
  });
});
