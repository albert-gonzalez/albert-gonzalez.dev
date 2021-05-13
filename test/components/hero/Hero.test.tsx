import { screen } from "@testing-library/dom";
import React from "react";
import { Hero } from "../../../src/components/hero/Hero";
import { render } from "../../test-utils";

describe("Hero", () => {
  beforeEach(() => {
    render(<Hero />);
  });
  test("should render correctly", async () => {
    expect((await screen.findByText("about")).closest("a")).not.toBeNull();
    expect((await screen.findByText("game")).closest("a")).not.toBeNull();
    expect((await screen.findByText("projects")).closest("a")).not.toBeNull();
    expect((await screen.findByText("experience")).closest("a")).not.toBeNull();
  });
});
