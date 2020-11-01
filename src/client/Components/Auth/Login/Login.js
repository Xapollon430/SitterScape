import { Text, Spinner, Form, Input, SubmitButton } from "../AuthModalCss";

const Login = ({ onChange, submitHandler, formError, isLoading }) => {
  return (
    <Form>
      <Input placeholder="Email"></Input>
      <Input placeholder="Password"></Input>
      <SubmitButton>SUBMIT</SubmitButton>
      <Text>Did somebody forget their account?</Text>
    </Form>
  );
};

export default Login;
