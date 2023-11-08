import Clock from "./Clock";
import React from "react";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe("the time on the clock", () => {
  beforeEach(() => render(<Clock />));

  it(" is displayed and matches the initialTime variable", () => {
    const initialTime = new Date();
    expect(screen.getByPlaceholderText("clock value").textContent).toEqual(
      initialTime.toLocaleString()
    );
  });

  it(" is different to the initalTime variable, after 3 seconds has passed", async () => {
    const initialTime = new Date();

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
    });

    expect(screen.getByPlaceholderText("clock value").textContent).not.toEqual(
      initialTime.toLocaleString()
    );
  });
});
