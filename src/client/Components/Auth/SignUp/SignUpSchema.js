import * as Yup from "yup";

export const SignInSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  name: Yup.string().required(),
  surname: Yup.string().required(),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password is too short"),
});
