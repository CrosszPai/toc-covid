import React, { useEffect, useState } from "react";
import { FunctionComponent, HTMLAttributes } from "react";
import styled from "styled-components";

interface SelectButtonProps extends HTMLAttributes<HTMLButtonElement> {
  selected: boolean;
  setSelected: (selected: boolean) => void;
}

const Button = styled.button<SelectButtonProps>`
  background: ${(props) => (props.selected ? "var(--sky-blue)" : "white")};
  border: none;
  color: ${(props) => (props.selected ? "white" : "var(--blue)")};
  font-size: 1rem;
  padding: 6px 37px;
  ${(props) =>
    props.selected
      ? "box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.1);"
      : "box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);"}
  border-radius: 4px;
  &:focus {
    outline: none;
  }
`;

const SelectButton: FunctionComponent<Omit<SelectButtonProps, "onClick">> = ({
  children,
  ...props
}) => {
  return (
    <Button
      {...props}
      onClick={() => {
        props.setSelected(props.selected);
      }}
      selected={props.selected}
    >
      {children}
    </Button>
  );
};

export default SelectButton;
