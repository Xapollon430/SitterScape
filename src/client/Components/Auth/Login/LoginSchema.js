import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { logUserIn } from "../../../store/actions/GeneralActions";
import { Post } from "../../../Functions/Functions";

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default (setErrorFromServer) => {
  const dispatch = useDispatch();

  return useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      try {
        let { data } = await Post(
          `${process.env.SIT_API_URL}/api/login`,
          values
        );

        localStorage.setItem("jwt-token", data.token);
        dispatch(logUserIn(data.user));
      } catch (e) {
        setErrorFromServer(data.error);
      }
    },
  });
};