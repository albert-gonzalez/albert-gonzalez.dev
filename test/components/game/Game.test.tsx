import { screen } from "@testing-library/dom";
import React from "react";
import { Game } from "../../../src/components/game/Game";
import { render } from "../../test-utils";

describe("Game", () => {
  beforeEach(() => {
    render(<Game />);
  });
  test("should render correctly", async () => {
    const iframe = await screen.findByTitle("A Dev's Adventure");

    expect(iframe.nodeName).toEqual("IFRAME");
    expect(iframe.getAttribute("src")).toEqual("/static/game/game.html?lng=en");
  });
});
