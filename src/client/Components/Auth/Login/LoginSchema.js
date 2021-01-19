import { useContext } from "react";
import { useFormik } from "formik";
import { StoreContext } from "../../../store/store";
import { useQuery } from "../../../Functions/Functions";
import { useHistory } from "react-router-dom";
import * as actions from "../../../store/actions";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default (setErrorFromServer) => {
  const [_, dispatch] = useContext(StoreContext);
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
        let response = await fetch(
          `${process.env.SITTERSCAPE_API_URL}/api/login`,
          {
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
            credentials: "include",
            body: JSON.stringify(values),
          }
        );

        if (response.status != 200) {
          throw await response.text();
        }

        let data = await response.json();

        dispatch(
          actions.generalDispatchBundler({
            user: data.user,
            loggedIn: true,
            accessToken: data.accessToken,
          })
        );

        history.push(query.get("next"));
      } catch (e) {
        setErrorFromServer(e);
        resetForm();
      }
    },
  });
};
