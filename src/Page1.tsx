import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "./components/Button";
import Card from "./components/Card";
import SelectButton from "./components/SelectButton";
import { BehavContext } from "./context/BehavContext";
import { SenderContext } from "./context/SenderContext";
import { Data } from "./Data";

const Group = ({ name }: { name: string }) => {
  const { add, remove, setCount, count } = useContext(BehavContext);
  const { send } = useContext(SenderContext);
  const [select, setSelect] = useState<undefined | boolean>();
  const tick = useRef<boolean>(true);
  useEffect(() => {
    if (select === true) {
      add(name);
    } else {
      remove(name);
    }
    if (typeof select === "boolean") {
      tick.current = false;
    } else if (typeof select === "undefined" && count !== 0) {
      tick.current = true;
    }
  }, [select]);
  useEffect(() => {
    if (tick.current === true) {
      if (count !== 0) {
        setCount(count - 1);
      }
    } else {
      setCount(count + 1);
    }
  }, [tick.current]);
  return (
    <>
      <SelectButton
        selected={select === true}
        setSelected={(val) => {
          if (!select) {
            setSelect(true);
            send("1");
          } else if (select === true) {
            setSelect(undefined);
          }
        }}
        style={{ marginRight: "2rem" }}
      >
        Yes
      </SelectButton>
      <SelectButton
        style={{ float: "right" }}
        selected={select === false}
        setSelected={(val) => {
          if (select === true || select === undefined) {
            setSelect(false);
            send("0");
          } else if (select === false) {
            setSelect(undefined);
          }
        }}
      >
        No
      </SelectButton>
    </>
  );
};

const Page1 = () => {
  const { behav, count } = useContext(BehavContext);
  const { send } = useContext(SenderContext);
  const history = useHistory();
  return (
    <>
      <div>
        <p style={{ textAlign: "right", marginBottom: "1rem" }}>page 1/3</p>
      </div>
      <div style={{ display: "flex" }}>
        <img
          style={{ marginRight: "1rem", marginBottom: "auto" }}
          src="doctor.svg"
        />
        <Card>{Data[1].header}</Card>
      </div>
      {Data[1].data.map((data) => {
        return (
          <div
            key={JSON.stringify(data)}
            style={{ display: "flex", marginTop: "1.5rem" }}
          >
            <img
              style={{ marginRight: "1rem", marginBottom: "auto" }}
              src="doctor.svg"
            />
            <Card>
              <div>
                <p style={{ marginBottom: "1rem" }}>{data}</p>
              </div>
              <Group name={data}></Group>
            </Card>
          </div>
        );
      })}
      <Button
        disabled={count < 4}
        style={{
          marginTop: "2rem",
          float: "right",
        }}
        onClick={() => {
          send("nextPage");
          history.push("/2");
        }}
        color="blue"
      >
        Next
      </Button>
    </>
  );
};

export default Page1;
