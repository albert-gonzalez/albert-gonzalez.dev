import { screen } from "@testing-library/dom";
import React from "react";
import { Card, CardImage, CardText } from "../../../src/components/card/Card";
import { render } from "../../test-utils";

describe("Card", () => {
  beforeEach(() => {
    render(
      <Card>
        <CardImage backgroundImage="background">Some image</CardImage>
        <CardText>Some text</CardText>
      </Card>
    );
  });
  test("should render correctly", async () => {
    expect(await screen.findByText("Some image")).not.toBeNull();
    expect(await screen.findByText("Some text")).not.toBeNull();
  });
});
