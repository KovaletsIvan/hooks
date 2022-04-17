import React, {
  useRef,
  useState,
  useEffect,
  useMemo,
  useReducer,
  useCallback,
} from "react";

import Clock from "./components/clock/Clock";
import Input from "./components/input/Input";
import Counter from "./components/counter/Counter";

import { reducer } from "./reducer";
import MyContext from "./MyContext";

import "./App.scss";

function App() {
  const countRender = useRef(0);
  const [count, dispatch] = useReducer(reducer, 0);
  const counted = useMemo(() => `count + 1 = ${count + 1}`, [count]);
  const [value, setValue] = useState({
    login: "",
    email: "",
  });

  useEffect(() => (countRender.current += 1));

  const handleChange = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const clearInput = (useCallback = () => {
    setValue({
      login: "",
      email: "",
    });
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("personData", JSON.stringify({ ...value }));
    clearInput();
  };
  const { login, email } = value;
  return (
    <div className="App">
      <MyContext.Provider value="Hello">
        <Clock />
        <Input
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          login={login}
          email={email}
          count={countRender.current}
        />
        <Counter count={count} counted={counted} dispatch={dispatch} />
      </MyContext.Provider>
    </div>
  );
}

export default App;
