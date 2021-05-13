import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import {
  DropDown,
  DropDownButton,
  DropDownContent,
} from "../../../src/components/dropDown/DropDown";
import { render } from "../../test-utils";

describe("DropDown", () => {
  beforeEach(() => {
    render(
      <DropDown
        button={<DropDownButton>Test Button</DropDownButton>}
        content={<DropDownContent>TestContent</DropDownContent>}
        className="test-class"
      />
    );
  });
  test("should render correctly", async () => {
    const button = await screen.findByText("Test Button");
    expect(button).toBeDefined();
    expect(await screen.findByText("TestContent")).toBeDefined();
    expect(button.closest(".test-class")).not.toBeNull();
  });

  test("should show the content when the button is clicked", async () => {
    const button = await screen.findByText("Test Button");
    const content = await screen.findByText("TestContent");

    fireEvent.click(button);
    expect(content.closest(".shown")).not.toBeNull();
  });

  test("should hide then content when the content is already shown and the button is clicked", async () => {
    const button = await screen.findByText("Test Button");
    const content = await screen.findByText("TestContent");

    fireEvent.click(button);
    fireEvent.click(button);

    expect(content.closest(".shown")).toBeNull();
  });

  test("should hide then content when the content is already shown and the DOM is clicked somewhere", async () => {
    const button = await screen.findByText("Test Button");
    const content = await screen.findByText("TestContent");

    fireEvent.click(button);
    fireEvent.click(document.documentElement);

    expect(content.closest(".shown")).toBeNull();
  });
});
