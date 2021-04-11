import React, {
  FunctionComponent,
  LegacyRef,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
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
  position: relative;
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

function useOutsideAlerter(ref: MutableRefObject<any>, cb: Function) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: Event) {
      if (ref.current && !ref.current.contains(event.target)) {
        cb();
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, cb]);
}

const SideBar = () => {
  const [toggle, setToggle] = useState(false);
  const ref = useRef<HTMLImageElement>();
  useOutsideAlerter(ref, () => {
    setToggle(false);
  });
  return (
    <Container>
      <HeaderBox>
        <img style={{ marginRight: "1rem" }} src="fist.svg" />
        <p style={{ alignSelf: "center" }}>KMITL GO FIGHT</p>
        <img
          onClick={() => {
            setToggle(true);
          }}
          style={{ marginLeft: "auto" }}
          src="people.svg"
        />
        {toggle && (
          <img
            ref={ref as LegacyRef<HTMLImageElement>}
            style={{
              position: "absolute",
              right: 0,
              top: 50,
            }}
            src="member.svg"
          />
        )}
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
