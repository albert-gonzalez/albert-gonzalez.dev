import { screen } from "@testing-library/dom";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  Experience,
  renderExperience,
} from "../../../src/components/section/Experience";
import { render } from "../../test-utils";

describe("Experience", () => {
  test("should render correctly", async () => {
    render(<Experience />);
    const section = (await screen.findByText("experience")).parentElement;

    expect(section?.querySelectorAll("h3").length).toBeGreaterThanOrEqual(1);
  });

  describe("renderExperience function", () => {
    test("should return cards with the provided data", async () => {
      const { t } = useTranslation();

      render(
        renderExperience(t, [
          {
            title: "title",
            company: "company",
            dates: "dates",
            description: "description",
            badges: [{ text: "b1", type: "t1" }],
          },
        ])
      );

      expect((await screen.findByText("title")).nodeName).toEqual("H3");
      expect((await screen.findByText("company")).nodeName).toEqual("H5");
      expect((await screen.findByText("dates")).nodeName).toEqual("H5");
      expect((await screen.findByText("description")).nodeName).toEqual("DIV");
      expect((await screen.findByText("b1")).classList.value).toContain("t1");
    });
  });
});
