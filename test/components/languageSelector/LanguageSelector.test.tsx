import { screen } from "@testing-library/dom";
import React from "react";
import { LanguageSelector } from "../../../src/components/languageSelector/LanguageSelector";
import { render } from "../../test-utils";

describe("LanguageSelector", () => {
  beforeEach(() => {
    render(<LanguageSelector />);
  });
  test("should render correctly", async () => {
    expect((await screen.findByAltText("ca")).closest("a")).not.toBeNull();
    expect((await screen.findByAltText("en")).closest("a")).not.toBeNull();
    expect((await screen.findByAltText("es")).closest("a")).not.toBeNull();
  });
});
