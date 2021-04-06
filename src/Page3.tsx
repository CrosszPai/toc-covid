import React, { useMemo } from "react";

import { useContext } from "react";
import styled from "styled-components";
import Button from "./components/Button";
import { SenderContext } from "./context/SenderContext";

const Triangle = ({ status }: any) => {
  const color = useMemo(() => {
    switch (status) {
      case "เข้าเกณฑ์":
        return "#EB5757";
      case "เสี่ยง":
        return "#F2994A";
      case "เฝ้าระวัง":
        return "#27AE60";
      case "ปกติ":
        return "#56CCF2";
    }
  }, [status]);
  return (
    <svg
      width="24"
      height="21"
      viewBox="0 0 24 21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 21L0.741669 0L23.2583 0L12 21Z" fill={color} />
    </svg>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatusBox = styled.div<{
  status: "เสี่ยง" | "เข้าเกณฑ์" | "เฝ้าระวัง" | "ปกติ";
}>`
  background: ${(props) => {
    switch (props.status) {
      case "เข้าเกณฑ์":
        return "#EB5757";
      case "เสี่ยง":
        return "#F2994A";
      case "เฝ้าระวัง":
        return "#27AE60";
      case "ปกติ":
        return "#56CCF2";
    }
  }};
  padding: 10px 96px;
  color: white;
  margin: 0;
  position: relative;
  border-radius: 4px;
`;

const Page3 = () => {
  const { state } = useContext(SenderContext);
  const [val] = useMemo(() => {
    return Object.entries(state);
  }, [state]);
  const pos = useMemo(() => {
    switch (val[1]) {
      case "ปกติ":
        return 20;
      case "เฝ้าระวัง":
        return 90;
      case "เข้าเกณฑ์":
        return 125;
      case "เสี่ยง":
        return 180;
    }
  }, [val]);
  return (
    <>
      <div>
        <p style={{ textAlign: "right", marginBottom: "1rem" }}>page 3/3</p>
      </div>
      <Container>
        <h5
          style={{
            fontSize: 30,
            fontWeight: 400,
            marginTop: 75,
            marginBottom: 25,
          }}
        >
          คุณอยู่ในกลุ่ม
        </h5>
        <StatusBox status={val[1] as any}>
          {val[1] as string}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              transform: "translateY(100%)",
              left: pos,
            }}
          >
            <Triangle status={val[1]} />
          </div>
        </StatusBox>
        <img
          style={{
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
          src="progress.svg"
        ></img>
        <img src="medical.svg" style={{ marginTop: "1rem" }} />
        <h4 style={{ marginTop: "5rem", marginBottom: 60, fontSize: 37 }}>
          {val[0]}
        </h4>
        <Button
          onClick={() => {
            window.location.reload();
          }}
          color="gray-4"
        >
          Back to page 1
        </Button>
      </Container>
    </>
  );
};

export default Page3;
