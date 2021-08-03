import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const Wrap = styled.div`
  background-color: #e9ebed;
  height: 100vh;
  min-width: 280px;
  display: grid;
`;

export const BrandLink = styled(Link)`
  font-size: 2rem;
  text-align: center;
  color: black;
  text-decoration: none;
  font-weight: 600;
  @media (max-width: 800px) {
    font-size: 1.8rem;
  }
`;

export const BrandWrap = styled.div`
  text-align: center;
  background-color: white;
  padding: 20px 0px;
  height: 40px;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const AuthWrap = styled.div`
  display: grid;
  width: 400px;
  height: ${(props) => (props.isLoginOpen ? "300px" : "400px")};
  justify-self: center;
  margin: 50px 0px;
  background-color: white;
  border: 1px solid gray;
  border-radius: 5px;
  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const Spinner = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid rgb(20, 169, 109);
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
  margin: 0px auto;
`;

export const TabWrap = styled.div`
  width: 90%;
  justify-self: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: white;
`;
export const TabText = styled.h3`
  text-align: center;
  font-weight: 400;
  padding-top: 8px;
  height: 32px;
  cursor: pointer;
  border-radius: 5px;
  border: ${(props) => (props.selected ? `1px solid black` : `none`)};
`;

export const Form = styled.form`
  display: grid;
  width: 90%;
  margin: 10px auto 30px auto;
  grid-gap: 3px;
  text-align: center;
`;

export const Input = styled.input`
  border: 1px solid ${(props) => (props.error ? "red" : "#cfcfcf")};
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
