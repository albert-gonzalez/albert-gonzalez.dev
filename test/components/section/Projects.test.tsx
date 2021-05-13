import { screen } from "@testing-library/dom";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  Projects,
  renderProjects,
} from "../../../src/components/section/Projects";
import { render } from "../../test-utils";

describe("Projects", () => {
  test("should render correctly", async () => {
    render(<Projects />);
    const section = (await screen.findByText("projects")).parentElement;

    expect(section?.querySelectorAll("h3").length).toBeGreaterThanOrEqual(1);
  });

  describe("renderProjects function", () => {
    test("should return cards with the provided data", async () => {
      const { t } = useTranslation();

      render(
        renderProjects(t, [
          {
            title: "title",
            description: "description",
            image: "image",
            siteUrl: "siteUrl",
            codeUrl: "codeUrl",
            playItUrl: "playItUrl",
          },
        ])
      );

      expect((await screen.findByText("title")).nodeName).toEqual("H3");
      expect((await screen.findByText("description")).nodeName).toEqual("DIV");
      expect((await screen.findByText("codeOn")).nodeName).toEqual("P");
      expect((await screen.findByText("visitSite")).nodeName).toEqual("P");
      expect((await screen.findByText("playItNow")).nodeName).toEqual("A");
    });
  });
});
