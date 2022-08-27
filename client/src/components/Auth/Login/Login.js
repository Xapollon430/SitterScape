import React from "react";
import * as S from "../Auth.styles";
import FormikInit from "./LoginSchema";
import Spinner from "../../common/Spinner";

const Login = ({ state, next }) => {
  const [errorFromServer, setErrorFromServer] = React.useState();

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
    handleBlur,
    isSubmitting,
  } = FormikInit(setErrorFromServer, state, next);

  return isSubmitting ? (
    <Spinner />
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
        name="email"
        placeholder="Email"
      />

      {errors.password && touched.password && (
        <S.ErrorText>{errors.password}</S.ErrorText>
      )}
      <S.Input
        error={errors.password && touched.password}
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        name="password"
        placeholder="Password"
        type="password"
      />
      {errorFromServer && <S.ErrorText>{errorFromServer}</S.ErrorText>}
      <S.SubmitButton type="submit">SUBMIT</S.SubmitButton>
      <S.Text>Did somebody forget their password?</S.Text>
    </S.Form>
  );
};

export default Login;
