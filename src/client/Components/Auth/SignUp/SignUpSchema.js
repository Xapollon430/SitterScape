import { useContext } from "react";
import { useFormik } from "formik";
import { StoreContext } from "../../../store/store";
import { useHistory } from "react-router-dom";
import { Post, useQuery } from "../../../Functions/Functions";
import * as actions from "../../../store/actions";
import * as Yup from "yup";

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
  const [_, dispatch] = useContext(StoreContext);
  const query = useQuery();
  const history = useHistory();

  return useFormik({
    initialValues: {
      email: "",
      name: "",
      surname: "",
      password: "",
    },
    validationSchema: SignUpSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        let { data } = await Post(
          `${process.env.SIT_API_URL}/api/sign-up`,
          values
        );
        localStorage.setItem("jwt-token", data.token);
        dispatch(
          actions.generalDispatchBundler({
            user: data.user,
            loggedIn: true,
          })
        );
        history.push(query.get("next"));
      } catch (e) {
        setErrorFromServer(e.response.data);
        resetForm();
      }
    },
  });
};
