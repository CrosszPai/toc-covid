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
  const [select, setSelect] = useState<boolean>(false);
  const tick = useRef<boolean>(true);
  useEffect(() => {
    if (select === true) {
      add(name);
    } else {
      remove(name);
    }
  }, [select]);

  return (
    <>
      <SelectButton
        selected={select === true}
        setSelected={() => {
          if (!select) {
            setSelect(true);
            send("1");
          }
        }}
        style={{ marginRight: "2rem" }}
      >
        Yes
      </SelectButton>
      <SelectButton
        style={{ float: "right" }}
        selected={select === false}
        setSelected={() => {
          if (select) {
            setSelect(false);
            send("0");
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
