import { useState } from "react";
import { TextField } from "@material-ui/core";
import * as S from "../Auth.styles";
import FormikInit from "./SignUpSchema";
import Spinner from "../../common/Spinner";

const SignUp = ({ state, next }) => {
  const [errorFromServer, setErrorFromServer] = useState();

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
    handleBlur,
    isSubmitting,
  } = FormikInit(setErrorFromServer, state, next);

  console.log(touched);
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
        value={values.name}
        onChange={handleChange}
        name="name"
        label="Name"
        variant="outlined"
        error={errors.name && touched.name ? true : false}
        helperText={errors.name && touched.name && errors.name}
        onBlur={handleBlur}
        touched={touched.name}
      />
      <TextField
        value={values.surname}
        onChange={handleChange}
        name="surname"
        label="Surname"
        variant="outlined"
        error={errors.surname && touched.surname ? true : false}
        helperText={errors.surname && touched.surname && errors.surname}
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
      <S.Text>By signing up you agree to our</S.Text>
      <S.Text>Terms of service</S.Text>
    </S.Form>
  );
};

export default SignUp;
