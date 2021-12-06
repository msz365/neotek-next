import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Button = styled(LinkS)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#333333" : "#fff")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#fff" : "#650004")};
  font-size: ${({ big }) => (big ? "20px" : "16px")};
  outline: none;
  border: 1px solid ${({ dark }) => (dark ? "#fff" : "#650004")};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#650004")};
    color: ${({ dark }) => (dark ? "#650004" : "#fff")};
    border: 1px solid ${({ dark }) => (dark ? "#650004" : "#fff")};
  }
`;
