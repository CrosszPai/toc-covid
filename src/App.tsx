import React, { useState } from "react";
import "./App.css";
import "@xstate/viz/themes/index.css";
import { MachineViz, StateViz, InspectorViz } from "@xstate/viz";
import { createMachine, interpret } from "xstate";
import { useMachine } from "@xstate/react";
import SideBar from "./SideBar";

const machine = createMachine({
  id: "COVID-19 DFA",
  initial: "Start",

  states: {
    Start: {
      on: {
        1: "ตอบใช่1ข้อ",
        0: "Start",
        nextPage: "ไม่มีความเสี่ยง",
      },
    },
    ตอบใช่1ข้อ: {
      on: {
        1: "ตอบใช่2ข้อ",
        0: "Start",
        nextPage: "มีโอกาส",
      },
    },
    ตอบใช่2ข้อ: {
      on: {
        1: "ตอบใช่3ข้อ",
        0: "ตอบใช่1ข้อ",
        nextPage: "มีโอกาส",
      },
    },
    ตอบใช่3ข้อ: {
      on: {
        1: "ตอบใช่4ข้อ",
        0: "ตอบใช่2ข้อ",
        nextPage: "มีโอกาส",
      },
    },
    ตอบใช่4ข้อ: {
      on: {
        0: "ตอบใช่3ข้อ",
        nextPage: "มีโอกาส",
      },
    },
    มีโอกาส: {
      id: "มีโอกาส",
      initial: "มีโอกาส",
      states: {
        มีโอกาส: {
          on: {
            1: "ตอบใช่1ข้อ",
            0: "มีโอกาส",
            Submit: "เสี่ยง",
          },
        },
        ตอบใช่1ข้อ: {
          on: {
            1: "ตอบใช่2ข้อ",
            0: "มีโอกาส",
            Submit: "เสี่ยง",
          },
        },
        ตอบใช่2ข้อ: {
          on: {
            1: "ตอบใช่3ข้อ",
            0: "ตอบใช่1ข้อ",
            Submit: "เสี่ยง",
          },
        },
        ตอบใช่3ข้อ: {
          on: {
            1: "ตอบใช่4ข้อ",
            0: "ตอบใช่2ข้อ",
            Submit: "เสี่ยง",
          },
        },
        ตอบใช่4ข้อ: {
          on: {
            1: "ตอบใช่5ข้อ",
            0: "ตอบใช่3ข้อ",
            Submit: "เข้าเกณฑ์",
          },
        },
        ตอบใช่5ข้อ: {
          on: {
            1: "ตอบใช่6ข้อ",
            0: "ตอบใช่4ข้อ",
            Submit: "เข้าเกณฑ์",
          },
        },
        ตอบใช่6ข้อ: {
          on: {
            0: "ตอบใช่5ข้อ",
            Submit: "เข้าเกณฑ์",
          },
        },
        เสี่ยง: {
          type: "final",
        },
        เข้าเกณฑ์: {
          type: "final",
        },
      },
    },
    ไม่มีความเสี่ยง: {
      id: "ไม่มีความเสี่ยง",
      initial: "ไม่มีความเสี่ยง",
      states: {
        ไม่มีความเสี่ยง: {
          on: {
            1: "ตอบใช่1ข้อ",
            0: "ไม่มีความเสี่ยง",
            Submit: "ปกติ",
          },
        },
        ตอบใช่1ข้อ: {
          on: {
            1: "ตอบใช่2ข้อ",
            0: "ไม่มีความเสี่ยง",
            Submit: "เฝ้าระวัง",
          },
        },
        ตอบใช่2ข้อ: {
          on: {
            1: "ตอบใช่3ข้อ",
            0: "ตอบใช่1ข้อ",
            Submit: "เฝ้าระวัง",
          },
        },
        ตอบใช่3ข้อ: {
          on: {
            1: "ตอบใช่4ข้อ",
            0: "ตอบใช่2ข้อ",
            Submit: "เฝ้าระวัง",
          },
        },
        ตอบใช่4ข้อ: {
          on: {
            1: "ตอบใช่5ข้อ",
            0: "ตอบใช่3ข้อ",
            Submit: "เฝ้าระวัง",
          },
        },
        ตอบใช่5ข้อ: {
          on: {
            1: "ตอบใช่6ข้อ",
            0: "ตอบใช่4ข้อ",
            Submit: "เฝ้าระวัง",
          },
        },
        ตอบใช่6ข้อ: {
          on: {
            0: "ตอบใช่5ข้อ",
            Submit: "เฝ้าระวัง",
          },
        },
        ปกติ: {
          type: "final",
        },
        เฝ้าระวัง: {
          type: "final",
        },
      },
    },
  },
});

function App() {
  const [state, send, mac] = useMachine(machine, { devTools: true });
  return (
    <>
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            width: '70%',
            height: "100vh",
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
        </div>
        <SideBar />
      </div>
    </>
  );
}

export default App;
