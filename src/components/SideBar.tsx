import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import Page1 from "../Page1";
import Page2 from "../Page2";
import Page3 from "../Page3";

const HeaderBox = styled.div`
  padding: 1rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background: white;
  display: flex;
`;

const Container = styled.div`
  height: 100vh;
  background: white;
  flex: 1 1 auto;
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
        <p style={{ alignSelf: "center" }}>KMITL GO FIGHT</p>
        <img style={{ marginLeft: "auto" }} src="people.svg" />
      </HeaderBox>
      <Body>
        <BrowserRouter>
          <Route path="/">
            <Redirect to="/1"></Redirect>
          </Route>
          <Route path="/1">
            <Page1 />
          </Route>
          <Route path="/2">
            <Page2 />
          </Route>
          <Route path="/3">
            <Page3 />
          </Route>
        </BrowserRouter>
      </Body>
    </Container>
  );
};

export default SideBar;
