import { useReducer } from "react";
import styles from "./Counter.module.css";

type CounterState = {
  count: number;
};

type CounterAction = {
  type: string;
  payload: number;
};

const initialState = { count: 0 };

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className={styles.container}>
      <div className={styles.count}>Count: {state.count}</div>
      <button
        className={styles.button}
        onClick={() => dispatch({ type: "increment", payload: 10 })}
      >
        Increment 10
      </button>
      <button
        className={styles.button}
        onClick={() => dispatch({ type: "decrement", payload: 10 })}
      >
        Decrement 10
      </button>
    </div>
  );
};

export default Counter;
