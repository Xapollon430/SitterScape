import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { changeIsModalOpen } from "../../../store/actions/AuthModalActions";
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
      let { data } = await Post(`${process.env.SIT_API_URL}/api/login`, values);

      if (data.user && data.token) {
        localStorage.setItem("jwt-token", data.token);
        dispatch(logUserIn(data.user));
        dispatch(changeIsModalOpen(false));
      } else {
        setErrorFromServer(data.error);
      }
    },
  });
};
