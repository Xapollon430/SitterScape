import React from "react";
import {
  Spinner,
  Form,
  Input,
  SubmitButton,
  Text,
  ErrorText,
} from "../AuthModalCss";
import FormikInit from "./LoginSchema";

const Login = () => {
  const [errorFromServer, setErrorFromServer] = React.useState();

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
    handleBlur,
    isSubmitting,
  } = FormikInit(setErrorFromServer);

  return isSubmitting ? (
    <Spinner />
  ) : (
    <Form onSubmit={handleSubmit}>
      {errors.email && touched.email ? (
        <ErrorText>{errors.email}</ErrorText>
      ) : null}
      <Input
        error={errors.email && touched.email}
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        id="email"
        name="email"
        placeholder="Email"
      ></Input>

      {errors.password && touched.password ? (
        <ErrorText>{errors.password}</ErrorText>
      ) : null}
      <Input
        error={errors.password && touched.password}
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        id="password"
        name="password"
        placeholder="Password"
        type="password"
      ></Input>
      {errorFromServer && <ErrorText>{errorFromServer}</ErrorText>}
      <SubmitButton type="submit">SUBMIT</SubmitButton>
      <Text>Did somebody forget their password?</Text>
    </Form>
  );
};

export default Login;
