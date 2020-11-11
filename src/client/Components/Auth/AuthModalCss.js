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

export const TabWrap = styled.div`
  width: 100%;
  margin-top: 25px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: white;
`;
export const TabText = styled.h3`
  text-align: center;
  font-weight: 400;
  padding-top: 8px;
  height: 32px;
  background-color: ${(props) =>
    props.selected ? `none` : `rgb(230, 231, 232)`};
`;

export const Form = styled.form`
  display: grid;
  width: 90%;
  margin: 10px auto 30px auto;
  grid-gap: 3px;
  text-align: center;
`;

export const Input = styled.input`
  border: ${(props) => (props.error ? "1px solid red" : "1px solid #cfcfcf")};
  outline: 0;
  height: 16px;
  padding: 0.8em 0 10px 0.8em;
`;

export const SubmitButton = styled.button`
  background-color: #28a55f;
  border: none;
  color: #fff;
  cursor: pointer;
  height: 35px;
  margin: 10px 0px;
`;

export const Text = styled.div`
  font-size: 0.9em;
`;

export const ErrorText = styled.span`
  color: red;
  font-size: 0.9rem;
  text-align: left;
  position: relative;
  top: 2px;
`;
