import React from "react";
import { Spinner, Form, Input, SubmitButton, Text } from "../AuthModalCss";

const SignUp = ({ onChange, submitHandler, formError, isLoading }) => {
  return (
    <Form>
      <Input placeholder="Email"></Input>
      <Input placeholder="Name"></Input>
      <Input placeholder="Surname"></Input>
      <Input placeholder="Password"></Input>
      <SubmitButton>SUBMIT</SubmitButton>
      <Text>By signing up you agree to our</Text>
      <Text>Terms of service</Text>
    </Form>
  );
};

export default SignUp;
