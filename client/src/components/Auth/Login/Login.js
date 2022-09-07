import React from "react";
import * as S from "../Auth.styles";
import FormikInit from "./LoginSchema";
import Spinner from "../../common/Spinner";
import { TextField } from "@material-ui/core";

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
      <TextField
        value={values.email}
        onChange={handleChange}
        name="email"
        label="Email"
        variant="outlined"
        error={errors.email && touched.email ? true : false}
        helperText={errors.email && touched.email && errors.email}
        onBlur={handleBlur}
      />

      <TextField
        value={values.password}
        onChange={handleChange}
        name="password"
        label="Password"
        variant="outlined"
        error={errors.password && touched.password ? true : false}
        helperText={errors.password && touched.password && errors.password}
        onBlur={handleBlur}
        type="password"
      />
      {errorFromServer && <S.ErrorText>{errorFromServer}</S.ErrorText>}
      <S.SubmitButton type="submit">SUBMIT</S.SubmitButton>
      <S.Text>Did somebody forget their password?</S.Text>
    </S.Form>
  );
};

export default Login;
