import { useContext } from "react";
import { useFormik } from "formik";
import { StoreContext } from "../../../store/store";
import * as actions from "../../../store/actions";
import * as Yup from "yup";

const SignUpSchema = Yup.object().shape({
  name: Yup.string().required("First name is required"),
  surname: Yup.string().required("Surname is required"),
  address: Yup.string(),
  state: Yup.string(),
  city: Yup.string(),
  zip: Yup.string().max(5),
  profilePicture: Yup.object(),
});

export default (setErrorFromServer) => {
  const [_, dispatch] = useContext(StoreContext);

  return useFormik({
    initialValues: {
      email: "",
      name: "",
      surname: "",
      address: "",
      state: "",
      city: "",
      zip: "",
      profilePicture: {},
    },
    validationSchema: SignUpSchema,
    onSubmit: async (values) => {
      try {
        // let response = await fetch(
        //   `${process.env.SITTERSCAPE_API_URL}/api/sign-up`,
        //   {
        //     method: "POST",
        //     body: values,
        //   }
        // );
        // if (response.status != 200) {
        //   throw await response.text();
        // }
        // let data = await response.json();
        // dispatch(
        //   actions.generalDispatchBundler({
        //     user: data.user,
        //     loggedIn: true,
        //     accessToken: data.accessToken,
        //   })
        // );
      } catch (e) {
        setErrorFromServer(e);
        resetForm();
      }
    },
  });
};
