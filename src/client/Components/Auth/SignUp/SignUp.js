import { Spinner, Form, Input, SubmitButton, Text } from "../AuthModalCss";
import { SignUpSchema } from "./SignUpSchema";
import { useFormik } from "formik";

const SignUp = ({ onChange, submitHandler, formError, isLoading }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      surname: "",
      password: "",
    },
    validationSchema: SignUpSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

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
