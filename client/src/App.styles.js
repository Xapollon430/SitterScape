import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
`;

export const Spinner = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid rgb(20, 169, 109);
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
`;
