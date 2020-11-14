import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { changeIsModalOpen } from "../../../store/actions/AuthModalActions";
import { logUserIn } from "../../../store/actions/GeneralActions";
import { Post } from "../../../Functions/Functions";

const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  name: Yup.string().required("First name is required"),
  surname: Yup.string().required("Surname is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password is too short"),
});

export default (setErrorFromServer) => {
  const dispatch = useDispatch();

  return useFormik({
    initialValues: {
      email: "",
      name: "",
      surname: "",
      password: "",
    },
    validationSchema: SignUpSchema,
    onSubmit: async (values) => {
      try {
        let { data } = await Post(
          `${process.env.SIT_API_URL}/api/sign-up`,
          values
        );

        localStorage.setItem("jwt-token", data.token);
        dispatch(logUserIn(data.user));
        dispatch(changeIsModalOpen(false));
      } catch (e) {
        setErrorFromServer(e.response.data);
      }
    },
  });
};
