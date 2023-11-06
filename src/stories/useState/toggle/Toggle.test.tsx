import { fireEvent, render, screen } from "@testing-library/react";
import Toggle from "./Toggle";
import React from "react";

describe("The state of the toggle ", () => {
  beforeEach(() => {
    render(<Toggle />);
  });

  it(" is initially set to true and `on`", () => {
    expect(screen.getByPlaceholderText("toggleButton").textContent).toEqual(
      "on"
    );
  });
  it(" changes to false and `off` when the button is pressed once", () => {
    fireEvent.click(screen.getByPlaceholderText("toggleButton"));
    expect(screen.getByPlaceholderText("toggleButton").textContent).toEqual(
      "off"
    );
  });
  it(" is true and `on` when the button is pressed twice", () => {
    fireEvent.click(screen.getByPlaceholderText("toggleButton"));
    fireEvent.click(screen.getByPlaceholderText("toggleButton"));
    expect(screen.getByPlaceholderText("toggleButton").textContent).toEqual(
      "on"
    );
  });
});
