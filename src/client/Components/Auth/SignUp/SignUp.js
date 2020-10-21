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

const SignUp = ({ onChange, submitHandler, formError, isLoading }) => {
  return (
    <Form>
      <Input placeholder="Email"></Input>
      <Input placeholder="Name"></Input>
      <Input placeholder="Surname"></Input>
      <Input placeholder="Password"></Input>
      <SubmitButton>SUBMIT</SubmitButton>
    </Form>
  );
};

export default SignUp;
