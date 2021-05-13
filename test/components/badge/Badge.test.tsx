import { screen } from "@testing-library/dom";
import React from "react";
import { Badge } from "../../../src/components/badge/Badge";
import { render } from "../../test-utils";

describe("Badge", () => {
  beforeEach(() => {
    render(<Badge>Some Text</Badge>);
  });
  test("should render correctly", async () => {
    expect(await screen.findByText("Some Text")).not.toBeNull();
  });
});
