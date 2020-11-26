import React from "react";
import * as S from "../AuthModal.styles";
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
    <S.Spinner />
  ) : (
    <S.Form onSubmit={handleSubmit}>
      {errors.email && touched.email && (
        <S.ErrorText>{errors.email}</S.ErrorText>
      )}
      <S.Input
        error={errors.email && touched.email}
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        id="email"
        name="email"
        placeholder="Email"
      ></S.Input>

      {errors.password && touched.password && (
        <S.ErrorText>{errors.password}</S.ErrorText>
      )}
      <S.Input
        error={errors.password && touched.password}
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        id="password"
        name="password"
        placeholder="Password"
        type="password"
      ></S.Input>
      {errorFromServer && <S.ErrorText>{errorFromServer}</S.ErrorText>}
      <S.SubmitButton type="submit">SUBMIT</S.SubmitButton>
      <S.Text>Did somebody forget their password?</S.Text>
    </S.Form>
  );
};

export default Login;
