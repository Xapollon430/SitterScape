import { useContext } from "react";
import { useFormik } from "formik";
import { StoreContext } from "../../../store/store";
import { generalDispatchBundler } from "../../../store/actions";
import { Post } from "../../../Functions/Functions";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default (setErrorFromServer) => {
  const [_, dispatch] = useContext(StoreContext); // {app}?

  return useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        let { data } = await Post(
          `${process.env.SIT_API_URL}/api/login`,
          values
        );

        localStorage.setItem("jwt-token", data.token);
        dispatch(
          generalDispatchBundler({
            user: data.user,
            isModalOpen: false,
            loggedIn: true,
          })
        );
      } catch (e) {
        setErrorFromServer(e.response.data);
        resetForm();
      }
    },
  });
};
