import React, { useState } from "react";
import "./App.css";
import "@xstate/viz/themes/index.css";
import { MachineViz, StateViz, InspectorViz } from "@xstate/viz";
import { createMachine, interpret } from "xstate";
import { useMachine } from "@xstate/react";
import SideBar from "./components/SideBar";
import { BehavContext } from "./context/BehavContext";
import { SenderContext } from "./context/SenderContext";
import { machine } from "./machine";

function App() {
  const [state, _send] = useMachine(machine, { devTools: true });
  const [behav, _setBehav] = useState(new Set<string>());
  const [count, setCount] = useState(0);
  const [words, setWords] = useState("");
  const send = (val: string) => {
    _send(val);
    setWords((prev) => prev + " " + val);
  };
  const add = (val: string) => {
    const temp = new Set(behav);
    if (behav.has(val)) {
      temp.delete(val);
      _setBehav(temp);
    } else {
      temp.add(val);
      _setBehav(temp);
    }
  };
  const remove = (val: string) => {
    const temp = new Set(behav);
    temp.delete(val);
    _setBehav(temp);
  };
  return (
    <SenderContext.Provider value={{ state: state.value, send }}>
      <BehavContext.Provider value={{ behav, add, remove, count, setCount }}>
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              width: "80%",
              height: "85vh",
            }}
          >
            <MachineViz
              mode="play"
              machine={machine}
              key="123"
              onEventTap={(data) => {
                send(data.eventType);
              }}
              state={state}
              style={{
                width: "100%",
                overflow: "scroll",
              }}
            />
            <div style={{ padding: "1rem" }}>{words}</div>
          </div>
          <SideBar />
        </div>
      </BehavContext.Provider>
    </SenderContext.Provider>
  );
}

export default App;
