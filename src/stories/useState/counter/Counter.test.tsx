import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Counter from "./Counter";

describe("the state of the counter ", () => {
  beforeEach(() => {
    render(<Counter />);
  });

  test("initially is set to 0", () => {
    expect(screen.getByPlaceholderText("counter value").textContent).toEqual("0");
  });
  test("value increases by 1 when the increase button is clicked", async () => {
    fireEvent.click(screen.getByText("Increase Count"));
    expect(screen.getByPlaceholderText("counter value").textContent).toEqual("1");
  });
  test("value decreases by 2 when the decrease button is clicked twice", async () => {
    const decreaseButton = screen.getByText("Decrease Count");
    fireEvent.click(decreaseButton);
    fireEvent.click(decreaseButton);
    expect(screen.getByPlaceholderText("counter value").textContent).toEqual("-2");
  });
});
