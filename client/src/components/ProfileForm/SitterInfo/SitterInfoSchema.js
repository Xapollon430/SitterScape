import { useContext } from "react";
import { useFormik } from "formik";
import { StoreContext } from "../../../store/store";
import * as actions from "../../../store/actions";
import * as Yup from "yup";

const PersonalInfoSchema = Yup.object().shape({
  address: Yup.string().required("Address is required!"),
  state: Yup.string().required("State is required!"),
  city: Yup.string().required("City is required"),
  zip: Yup.string().max(5).required("Zip code is required!"),
  boarding: Yup.boolean(),
  boardingRate: Yup.number(),
  walking: Yup.boolean(),
  walkingRate: Yup.number(),
  houseSitting: Yup.boolean(),
  houseSittingRate: Yup.number(),
  dropInVisit: Yup.boolean(),
  dropInVisitRate: Yup.number(),
  hasChildren: Yup.boolean().required("Please select an option!"),
  homeType: Yup.string().required("Please select an option!"),
  headline: Yup.string().required("A headline is required!"),
  petPreferences: Yup.mixed(),
  aboutMe: Yup.string().required("An about me is required!"),
  yearsOfExperience: Yup.string(),
  hasYard: Yup.boolean().required("Please select an option."),
  smokes: Yup.boolean().required("Please select an option."),
  profilePicture: Yup.mixed().required("A profile picture is required!"),
});

export default (setErrorFromServer) => {
  const [state, dispatch] = useContext(StoreContext);

  return useFormik({
    initialValues: {
      address: state.user.address || "",
      state: state.user.state || "",
      city: state.user.city || "",
      zip: state.user.zip || "",
      boarding: state.user?.services?.boarding?.active || false,
      boardingRate: state.user?.services?.boarding?.rate || 0,
      walking: state.user?.services?.walking?.active || false,
      walkingRate: state.user?.services?.walking?.rate || 0,
      houseSitting: state.user?.services?.houseSitting?.active || false,
      houseSittingRate: state.user?.services?.houseSitting?.rate || 0,
      dropInVisit: state.user?.services?.dropInVisit?.active || false,
      dropInVisitRate: state.user?.services?.dropInVisitRate?.rate || 0,
      hasChildren: state.user.hasChildren,
      homeType: state.user.homeType || "",
      petPreferencesSmall: state.user.petPreferencesSmall || false,
      petPreferencesMedium: state.user.petPreferencesMedium || false,
      petPreferencesLarge: state.user.petPreferencesLarge || false,
      petPreferencesGiant: state.user.petPreferencesGiant || false,
      headline: state.user.headline || "",
      smokes: state.user.smokes,
      aboutMe: state.user.aboutMe || "",
      yearsOfExperience: state.user.yearsOfExperience || 0,
      hasYard: state.user.hasYard,
      profilePicture: "",
    },
    // validate: (values) => {
    //   let errors;
    //   let errorExists = false;

    //   console.log(123);

    //   if (values.boarding && values.boardingRate <= 0) {
    //     errors.boardingRate = "Please choose a rate above $0";
    //     errorExists = true;
    //   }

    //   if (values.dropInVisit && values.dropInVisitRate <= 0) {
    //     errors.dropInVisitRate = "Please choose a rate above $0";
    //     errorExists = true;
    //   }

    //   if (values.houseSitting && values.houseSittingRate <= 0) {
    //     errors.houseSittingRate = "Please choose a rate above $0";
    //     errorExists = true;
    //   }

    //   if (values.walking && values.walkingRate <= 0) {
    //     errors.walkingRate = "Please choose a rate above $0";
    //     errorExists = true;
    //   }

    //   if (errorExists) {
    //     return errors;
    //   }

    //   return true;
    // },
    // validationSchema: PersonalInfoSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log(values, actions);
      try {
        // const updatedProfileData = new FormData();
        // for (const data in values) {
        //   data !== "" && updatedProfileData.append(data, values[data]);
        // }
        // console.log(updatedProfileData);
        // let response = await fetch(
        //   `${process.env.SITTERSCAPE_API_URL}/api/update-personal-info`,
        //   {
        //     method: "PATCH",
        //     body: updatedProfileData,
        //     headers: {
        //       Authorization: "Bearer " + state.accessToken,
        //     },
        //   }
        // );
        // if (response.status != 200) {
        //   throw await response.text();
        // }
        // let data = await response.json();
        // dispatch(
        //   actions.generalDispatchBundler({
        //     user: data.user,
        //   })
        // );
      } catch (e) {
        setErrorFromServer(e);
        resetForm();
      }
    },
  });
};
