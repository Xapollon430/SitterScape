import { useContext } from "react";
import { useFormik } from "formik";
import { StoreContext } from "../../../store/store";
import { useQuery } from "../../../Functions/hooks";
import { useHistory } from "react-router-dom";
import { setLocalStorageWithLocation } from "../../../Functions/helpers";
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
          `${process.env.REACT_APP_SERVER_URL}/api/login`,
          {
            method: "POST",
            credentials: "include",
            body: JSON.stringify(values),
            headers: {
              "Content-Type": "application/json",
            },
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

        setLocalStorageWithLocation(
          data?.user?.latitude && data?.user?.longitude
        );

        history.push(query.get("next"));
      } catch (e) {
        setErrorFromServer(e);
        resetForm();
      }
    },
  });
};
