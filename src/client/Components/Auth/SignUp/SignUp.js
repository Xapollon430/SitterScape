import {
  Spinner,
  Form,
  Input,
  SubmitButton,
  Text,
  ErrorText,
} from "../AuthModalCss";
import FormikInit from "./SignUpSchema";

const SignUp = () => {
  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
    handleBlur,
    isValidating,
  } = FormikInit();

  return isValidating ? (
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
      {errors.name && touched.name ? (
        <ErrorText>{errors.name}</ErrorText>
      ) : null}
      <Input
        error={errors.name && touched.name}
        value={values.name}
        onChange={handleChange}
        id="name"
        name="name"
        placeholder="Name"
      ></Input>
      {errors.surname && touched.surname ? (
        <ErrorText>{errors.surname}</ErrorText>
      ) : null}
      <Input
        error={errors.surname && touched.surname}
        value={values.surname}
        onChange={handleChange}
        id="surname"
        name="surname"
        placeholder="Surname"
      ></Input>
      {errors.password && touched.password ? (
        <ErrorText>{errors.password}</ErrorText>
      ) : null}
      <Input
        error={errors.password && touched.password}
        value={values.password}
        onChange={handleChange}
        id="password"
        name="password"
        placeholder="Password"
        type="password"
      ></Input>
      <SubmitButton type="submit">SUBMIT</SubmitButton>
      <Text>By signing up you agree to our</Text>
      <Text>Terms of service</Text>
    </Form>
  );
};

export default SignUp;
