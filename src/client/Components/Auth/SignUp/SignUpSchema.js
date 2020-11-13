import * as Yup from "yup";
import { useFormik } from "formik";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { changeIsModalOpen } from "../../../store/actions/AuthModalActions";

import { logUserIn } from "../../../store/actions/GeneralActions";

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

export default (setIsLoading) => {
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
      setIsLoading(true);

      Axios.post(`${process.env.SIT_API_URL}/api/sign-up`, values).then(
        ({ data }) => {
          if (data.user && data.token) {
            localStorage.setItem("jwt-token", data.token);
            dispatch(logUserIn(data.user));
            dispatch(changeIsModalOpen(false));
          } else {
            // setErrorMessageFromServer(data.error); Error from server
          }
        }
      );
    },
  });
};
