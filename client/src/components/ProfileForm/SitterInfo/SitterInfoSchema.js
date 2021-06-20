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
  headline: Yup.string().required("A headline is required!"),
  aboutMe: Yup.string().required("An about me is required!"),
  profilePicture: Yup.mixed().required("A profile picture is required!"),
});

export default ({ setShowErrorSnackbar }) => {
  const [state, dispatch] = useContext(StoreContext);

  return useFormik({
    validateOnChange: false,
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
      hasChildren: state.user.hasChildren || "",
      homeType: state.user.homeType || "",
      petPreferencesSmall: state.user.petPreferencesSmall || false,
      petPreferencesMedium: state.user.petPreferencesMedium || false,
      petPreferencesLarge: state.user.petPreferencesLarge || false,
      petPreferencesGiant: state.user.petPreferencesGiant || false,
      headline: state.user.headline || "",
      smokes: state.user.smokes || "",
      aboutMe: state.user.aboutMe || "",
      yearsOfExperience: state.user.yearsOfExperience || 0,
      hasYard: state.user.hasYard || "",
      profilePicture: state.user.profilePicture || "",
    },
    validate: (values) => {
      let errors = {};
      let errorExists = false;

      if (values.boarding) {
        if (values.boardingRate <= 0) {
          errors.boardingRate = "Please choose a rate above $0";
          errorExists = true;
        }

        if (values.smokes === "") {
          errors.smokes = "Please select an option.";
          errorExists = true;
        }
        if (values.hasYard === "") {
          errors.hasYard = "Please select an option.";
          errorExists = true;
        }
        if (values.hasChildren === "") {
          errors.hasChildren = "Please select an option.";
          errorExists = true;
        }
        if (values.homeType === "") {
          errors.homeType = "Please select an option.";
          errorExists = true;
        }
      }

      if (values.dropInVisit && values.dropInVisitRate <= 0) {
        errors.dropInVisitRate = "Please choose a rate above $0";
        errorExists = true;
      }

      if (values.houseSitting && values.houseSittingRate <= 0) {
        errors.houseSittingRate = "Please choose a rate above $0";
        errorExists = true;
      }

      if (values.walking && values.walkingRate <= 0) {
        errors.walkingRate = "Please choose a rate above $0";
        errorExists = true;
      }

      if (
        values.petPreferencesSmall == false &&
        values.petPreferencesMedium == false &&
        values.petPreferencesLarge == false &&
        values.petPreferencesGiant == false
      ) {
        errors.petPreferences = "Please pick at least one!";
        errorExists = true;
      }

      if (values.profilePicture === "") {
        errors.profilePicture = "Please upload a photo!";
        errorExists = true;
      }

      let yupCheck = PersonalInfoSchema.isValidSync(values);

      if (errorExists || !yupCheck) {
        setShowErrorSnackbar(true);
        return errors;
      }

      return true;
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const updatedProfileData = new FormData();
        for (const data in values) {
          data !== "" && updatedProfileData.append(data, values[data]);
        }
        let response = await fetch(
          `${process.env.REACT_APP_SERVER_URL}/api/update-sitter-info`,
          {
            method: "PATCH",
            body: updatedProfileData,
            headers: {
              Authorization: "Bearer " + state.accessToken,
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
          })
        );
      } catch (e) {
        // setErrorFromServer(e);
        resetForm();
      }
    },
  });
};
