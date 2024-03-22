import React, { useReducer, useRef } from "react";

const reducer = (state: any, action: { type: string; payload: any }) => {
  let array = [];
  if (action.type === "add_todo_item") {
    array = [...state];
    array.push(action.payload);
    return array;
  }

  throw Error("Unknown action.");
};

export const ToDoList = () => {
  const playerName = useRef<HTMLInputElement>(null);
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <>
      <p>
        <input placeholder="new-item" ref={playerName} type="text" />
      </p>
      <button
        onClick={() => {
          const inputValue: string = playerName.current?.value || "";
          dispatch({ type: "add_todo_item", payload: inputValue });
        }}
      >
        ADD ITEM TO LIST
      </button>
      {state.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </>
  );
};

export default ToDoList;
