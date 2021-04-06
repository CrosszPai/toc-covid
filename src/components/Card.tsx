import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: ${({ color = "yellow" }) => "var(--" + color + ")"};
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 1rem;
  width: 100%;
`;

export default Card;
