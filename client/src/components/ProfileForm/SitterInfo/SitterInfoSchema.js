import { useContext } from "react";
import { useFormik } from "formik";
import { StoreContext } from "../../../store/store";
import * as actions from "../../../store/actions";

export default (setShowErrorSnackbar) => {
  const [state, dispatch] = useContext(StoreContext);

  return useFormik({
    validateOnChange: false,
    initialValues: {
      address: state.user.address || "",
      state: state.user.state || "",
      city: state.user.city || "",
      zip: state.user.zip || "",
      boarding: state.user.boarding || false,
      boardingRate: state.user.boardingRate || 0,
      walking: state.user.walking || false,
      walkingRate: state.user.walkingRate || 0,
      houseSitting: state.user.houseSitting || false,
      houseSittingRate: state.user.houseSittingRate || 0,
      dropInVisit: state.user.dropInVisit || false,
      dropInVisitRate: state.user.dropInVisitRate || 0,
      homeType: state.user.homeType || "",
      petPreferencesSmall: state.user.petPreferencesSmall || false,
      petPreferencesMedium: state.user.petPreferencesMedium || false,
      petPreferencesLarge: state.user.petPreferencesLarge || false,
      petPreferencesGiant: state.user.petPreferencesGiant || false,
      headline: state.user.headline || "",
      smokes:
        state.user.smokes === false
          ? false
          : state.user.smokes === true
          ? true
          : "",
      hasChildren:
        state.user.hasChildren === false
          ? false
          : state.user.hasChildren === true
          ? true
          : "",
      hasYard:
        state.user.hasYard === false
          ? false
          : state.user.hasYard === true
          ? true
          : "",
      aboutMe: state.user.aboutMe || "",
      yearsOfExperience: state.user.yearsOfExperience || 0,
      profilePicture: state.user.profilePicture || "",
    },
    validate: async (values) => {
      let errors = {};
      let errorExists = false;

      if (values.boarding) {
        if (values.boardingRate <= 0 || values.boardingRate >= 150) {
          errors.boardingRate = "Please choose a rate above $0 and under $150";
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

      if (
        values.dropInVisit &&
        (values.dropInVisitRate <= 0 || values.dropInVisitRate >= 150)
      ) {
        errors.dropInVisitRate = "Please choose a rate above $0 and under $150";
        errorExists = true;
      }

      if (
        values.houseSitting &&
        (values.houseSittingRate <= 0 || values.houseSittingRate >= 150)
      ) {
        errors.houseSittingRate =
          "Please choose a rate above $0 and under $150";
        errorExists = true;
      }

      if (
        values.walking &&
        (values.walkingRate <= 0 || values.walkingRate >= 150)
      ) {
        errors.walkingRate = "Please choose a rate above $0 and under $150";
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

      if (values.address === "") {
        errors.address = "Address is required!";
        errorExists = true;
      }
      if (values.zip === "") {
        errors.zip = "Zip is required!";
        errorExists = true;
      }
      if (values.state === "") {
        errors.state = "State is required!";
        errorExists = true;
      }
      if (values.city === "") {
        errors.city = "City is required!";
        errorExists = true;
      }
      if (values.aboutMe === "") {
        errors.aboutMe = "About me is required!";
        errorExists = true;
      }
      if (values.headline === "") {
        errors.headline = "Headline is required!";
        errorExists = true;
      }

      if (errorExists) {
        setShowErrorSnackbar(true);
        return errors;
      }

      return true;
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const updatedProfileData = new FormData();
        for (const data in values) {
          values[data] !== "" && updatedProfileData.append(data, values[data]);
        }

        updatedProfileData.append("isActiveSitter", true);

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
            user: data,
          })
        );
      } catch (e) {
        // setErrorFromServer(e);
        // resetForm();
      }
    },
  });
};
