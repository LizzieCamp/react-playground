import { useReducer } from "react";

const reducer = (state: any, action: { type: string; payload: any }) => {
  if (action.type === "colour-pink") {
    state = action.payload;
    return state;
  }
  if (action.type === "colour-purple") {
    state = action.payload;
    return state;
  }
  if (action.type === "colour-yellow") {
    state = action.payload;
    return state;
  }

  throw Error("Unknown action.");
};

export const ColourPicker = () => {

  const [state, dispatch] = useReducer(reducer, "white");

  return (
    <div style={{ height: "100vh", width: "100vw", backgroundColor: state }}>
      <button
        onClick={() => {
          dispatch({ type: "colour-pink", payload: "pink" });
        }}
      >
        Pink
      </button>
      <button
        onClick={() => {
          dispatch({ type: "colour-purple", payload: "purple" });
        }}
      >
        Purple
      </button>
      <button
        onClick={() => {
          dispatch({ type: "colour-yellow", payload: "yellow" });
        }}
      >
        Yellow
      </button>
    </div>
  );
};

export default ColourPicker;
