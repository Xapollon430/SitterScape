import { useContext } from "react";
import { useFormik } from "formik";
import { StoreContext } from "../../../store/store";
import { Post, useQuery } from "../../../Functions/Functions";
import { useHistory, useLocation } from "react-router-dom";
import * as actions from "../../../store/actions";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default (setErrorFromServer) => {
  const [_, dispatch] = useContext(StoreContext); // {app}?
  const query = useQuery();
  const history = useHistory();
  return useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        let { data } = await Post(
          `${process.env.SITTERSCAPE_API_URL}/api/login`,
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
