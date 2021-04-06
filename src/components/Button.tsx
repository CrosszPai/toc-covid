import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => "var(--" + props.color + ")"};
  border: none;
  font-size: 1rem;
  padding: 6px 37px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  color: white;
  &:disabled {
    background: var(--gray-10);
    color: var(--gray-5);
  }
`;

export default Button;
