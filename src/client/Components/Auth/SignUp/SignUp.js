import { useState } from "react";
import * as S from "../AuthModal.styles";
import FormikInit from "./SignUpSchema";

const SignUp = () => {
  const [errorFromServer, setErrorFromServer] = useState();

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
      {errors.name && touched.name && <S.ErrorText>{errors.name}</S.ErrorText>}
      <S.Input
        error={errors.name && touched.name}
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        id="name"
        name="name"
        placeholder="Name"
      ></S.Input>
      {errors.surname && touched.surname && (
        <S.ErrorText>{errors.surname}</S.ErrorText>
      )}
      <S.Input
        error={errors.surname && touched.surname}
        value={values.surname}
        onChange={handleChange}
        onBlur={handleBlur}
        id="surname"
        name="surname"
        placeholder="Surname"
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
      <S.Text>By signing up you agree to our</S.Text>
      <S.Text>Terms of service</S.Text>
    </S.Form>
  );
};

export default SignUp;
