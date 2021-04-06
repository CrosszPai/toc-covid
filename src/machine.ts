import { createMachine } from "xstate";

export const machine = createMachine({
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
          nextPage: "มีความเสี่ยง",
        },
      },
      ตอบใช่2ข้อ: {
        on: {
          1: "ตอบใช่3ข้อ",
          0: "ตอบใช่1ข้อ",
          nextPage: "มีความเสี่ยง",
        },
      },
      ตอบใช่3ข้อ: {
        on: {
          1: "ตอบใช่4ข้อ",
          0: "ตอบใช่2ข้อ",
          nextPage: "มีความเสี่ยง",
        },
      },
      ตอบใช่4ข้อ: {
        on: {
          0: "ตอบใช่3ข้อ",
          nextPage: "มีความเสี่ยง",
        },
      },
      มีความเสี่ยง: {
        id: "มีความเสี่ยง",
        initial: "มีความเสี่ยง",
        states: {
          มีความเสี่ยง: {
            on: {
              1: "ตอบใช่1ข้อ",
              0: "มีความเสี่ยง",
              Submit: "เสี่ยง",
            },
          },
          ตอบใช่1ข้อ: {
            on: {
              1: "ตอบใช่2ข้อ",
              0: "มีความเสี่ยง",
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
  