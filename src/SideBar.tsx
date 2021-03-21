import React from "react";
import styled from "styled-components";
import Card from "./Card";

const HeaderBox = styled.div`
  padding: 1rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background: white;
  display: flex;
`;

const Container = styled.div`
  flex: 1 1 auto;
  height: 100vh;
  background: white;
`;

const Body = styled.div`
  padding: 1rem;
  color: #4f4f4f;
`;

const SideBar = () => {
  return (
    <Container>
      <HeaderBox>
        <img style={{ marginRight: "1rem" }} src="fist.svg" />
        <p>KMITL GO FIGHT</p>
        <img style={{ marginLeft: "auto" }} src="people.svg" />
      </HeaderBox>
      <Body>
        <div>
          <p style={{ textAlign: "right" }}>page 1/3</p>
        </div>
        <div style={{ display: "flex" }}>
          <img
            style={{ marginRight: "1rem", marginBottom: "auto" }}
            src="doctor.svg"
          />
          <Card>
            <p>
              เราขอตรวจสอบคุณว่ามีความเสี่ยง ที่จะป่วย เป็นโรค{" "}
              <span style={{ color: "red" }}>COVID-19</span> หรือไม่
              <br />
              <span style={{ color: "#86A5C4" }}>
                (ในช่วงเวลา 14 วัน ก่อนเริ่มป่วย)
              </span>
            </p>
          </Card>
        </div>
      </Body>
    </Container>
  );
};

export default SideBar;
