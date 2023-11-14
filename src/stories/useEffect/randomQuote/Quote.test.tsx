import { fireEvent, render, screen } from "@testing-library/react";
import Quote from "./Quote";
import React from "react";
import fetchMock from "jest-fetch-mock";
import { act } from "react-dom/test-utils";

fetchMock.enableMocks();

describe("The Quote component", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
    render(<Quote />);
  });

  it(" renders a button on the screen", () => {
    expect(screen.getByPlaceholderText("button value").textContent)
      .toBeInTheDocument;
  });
  it(" renders a quote when the button is pressed", async () => {
    fetchMock.mockResponseOnce(JSON.stringify([{ id: 1, content: "Quote 1" }]));

    fireEvent.click(screen.getByPlaceholderText("button value"));

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
    });

    expect(screen.getByPlaceholderText("quote value").textContent).toEqual(
      "Quote 1"
    );
  });
});
