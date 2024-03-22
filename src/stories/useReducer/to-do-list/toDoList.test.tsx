import ToDoList from "./toDoList";
import React from "react";
import {
  render,
  fireEvent,
  getByPlaceholderText,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("The TodoList component ", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<ToDoList />);
    expect(getByText("ADD ITEM TO LIST")).toBeInTheDocument();
  });

  it("when clicking the add item button, adds a new item to the list", () => {
    const { getByText, getByPlaceholderText } = render(<ToDoList />);

    const button = getByText("ADD ITEM TO LIST");
    const input = getByPlaceholderText("new-item");

    fireEvent.change(input, { target: { value: "New item" } });

    fireEvent.click(button);

    expect(getByText("New item")).toBeInTheDocument();
  });
});
