import React from "react";
import {
  CancelIcon,
  Spinner,
  TabWrap,
  TabText,
  Form,
  Input,
  SubmitButton,
} from "../AuthModalCss";

const Login = ({ onChange, submitHandler, formError, isLoading }) => {
  return (
    <Form>
      <Input placeholder="Email"></Input>
      <Input placeholder="Password"></Input>
      <SubmitButton>SUBMIT</SubmitButton>
    </Form>
  );
};

export default Login;
