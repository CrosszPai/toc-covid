import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "./components/Button";
import Card from "./components/Card";
import SelectButton from "./components/SelectButton";
import { BehavContext } from "./context/BehavContext";
import { SenderContext } from "./context/SenderContext";
import { Data } from "./Data";

const Page2 = () => {
  const { behav } = useContext(BehavContext);
  const { send } = useContext(SenderContext);
  const history = useHistory();
  return (
    <>
      <div>
        <p style={{ textAlign: "right", marginBottom: "1rem" }}>page 2/3</p>
      </div>
      {behav.size > 0 && (
        <div style={{ display: "flex" }}>
          <Card color="sky-blue">
            {[...behav].map((val) => (
              <p key={val}>- {val}</p>
            ))}
          </Card>
          <img
            style={{ marginLeft: "1rem", marginBottom: "auto" }}
            src="human.svg"
          />
        </div>
      )}
      <div style={{ display: "flex", marginTop: "1.5rem" }}>
        <img
          style={{ marginRight: "1rem", marginBottom: "auto" }}
          src="doctor.svg"
        />
        <Card>{Data[2].header2}</Card>
      </div>
      <div style={{ display: "flex", marginTop: "1.5rem" }}>
        <img
          style={{ marginRight: "1rem", marginBottom: "auto" }}
          src="doctor.svg"
        />
        <Card>
          <div>
            <p
              style={{
                color: "red",
                textAlign: "center",
                marginBottom: "1.5rem",
              }}
            >
              คุณมีอาการดังต่อไปนี้หรือไม่ ?
            </p>
            {Data[2].data.map((val) => {
              return (
                <label
                  key={val}
                  style={{ display: "block", marginBottom: "1rem" }}
                >
                  <input
                    onChange={(e) => {
                      if (e.target.checked) {
                        send("1");
                      } else {
                        send("0");
                      }
                    }}
                    style={{ marginRight: "1rem", background: "transpartent" }}
                    key={val}
                    type="checkbox"
                  ></input>
                  {val}
                </label>
              );
            })}
            {Data[2].tail}
          </div>
        </Card>
      </div>
      <div
        style={{
          marginTop: "2rem",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Button
          onClick={() => {
            send("Submit");
            history.push("/3");
          }}
          color="brick"
        >
          Submit
        </Button>
      </div>
    </>
  );
};

export default Page2;
