import { useContext } from "react";
import { useFormik } from "formik";
import { StoreContext } from "../../../store/store";
import { useHistory } from "react-router-dom";
import { useQuery } from "../../../Functions/Functions";
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
        let response = await fetch(
          `${process.env.SITTERSCAPE_API_URL}/api/sign-up`,
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
