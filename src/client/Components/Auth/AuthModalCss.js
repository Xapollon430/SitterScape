import styled, { keyframes } from "styled-components";

export const CancelIcon = styled.i`
  color: rgb(20, 169, 109);
  position: absolute;
  right: 10px;
  top: 5px;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid rgb(20, 169, 109);
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
`;

export const Tab = styled.span`
  width: 50%;
  height: 40px;
  background-color: white;
  border: 1px solid black;
`;
export const TabText = styled.h3`
  text-align: center;
`;
