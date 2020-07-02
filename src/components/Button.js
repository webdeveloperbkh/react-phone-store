
import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border-radius: 3px;
  border: 0.05rem solid #009ffd;
  border-color: ${(props) =>
    props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  color: ${(props) => (props.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
  border-radius: 0.2rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${(props) =>
      props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainBlue);
    border-color: #ffa400;
  }
  &:focus {
    outline: none;
  }
`;
