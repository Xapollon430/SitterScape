import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "@material-ui/core/Slider";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import * as S from "./SearchSitter.styles";
import { useState } from "react";
import { useFormik } from "formik";

const defaultFilterData = {
  serviceType: "",
  location: "",
  price: [33, 66],
};

const FilterModalContent = () => {
  const [showMoreFilter, setShowMoreFilter] = useState(false);
  const [filterData, setFilterData] = useState(defaultFilterData);

  const changeHandler = (key, value) => {
    setFilterData({
      ...filterData,
      [key]: value,
    });
  };

  const toggleShowMoreFilter = () => setShowMoreFilter(!showMoreFilter);

  return (
    <S.FilterWrap>
      <S.FilterTitle>Find your pawfect sitter!</S.FilterTitle>
      <FormControl variant="outlined" fullWidth>
        <InputLabel>Service</InputLabel>
        <Select
          value={filterData.serviceType}
          onChange={(e) => {
            changeHandler("serviceType", e.target.value);
          }}
          label="Service"
        >
          <MenuItem value={"Boarding"}>Boarding</MenuItem>
          <MenuItem value={"Home Sitting"}>Home Sitting</MenuItem>
          <MenuItem value={"Dog Walking"}>Dog Walking</MenuItem>
          <MenuItem value={"Drop In Visit"}>Drop In Visit</MenuItem>
        </Select>
      </FormControl>
      <TextField
        value={filterData.location}
        onChange={(e) => {
          changeHandler("location", e.target.value);
        }}
        label="Address or Zip Code"
        variant="outlined"
      />
      <S.FilterPriceWrap>
        <S.FilterPriceRangeWrap>
          <S.FilterPriceRangeLow>${filterData.price[0]}</S.FilterPriceRangeLow>
          <S.FilterPriceRangeHigh>
            ${filterData.price[1]}
          </S.FilterPriceRangeHigh>
        </S.FilterPriceRangeWrap>
        <Slider
          value={filterData.price}
          onChange={(e, value) => changeHandler("price", value)}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
        />
      </S.FilterPriceWrap>

      <S.More onClick={toggleShowMoreFilter}>
        More Filters <S.StyledIcon showMoreFilter={showMoreFilter} />
      </S.More>
      {showMoreFilter && (
        <S.FilterContentWrap>
          <S.FilterGroupWrap>
            <S.FilterText>Smoking home</S.FilterText>
            <FormControl
              variant="outlined"
              // error={errors.smokes ? true : false}
            >
              <InputLabel>Smoking</InputLabel>
              <Select
                value={
                  true
                  // values.smokes === false
                  //   ? false
                  //   : values.smokes === true
                  //   ? true
                  //   : undefined
                }
                onChange={(e) => {
                  // setFieldValue("smokes", e.target.value);
                }}
                variant="outlined"
                label="Smoking"
              >
                <MenuItem value={true}>Yes</MenuItem>
                <MenuItem value={false}>No</MenuItem>
              </Select>
            </FormControl>
          </S.FilterGroupWrap>
          <S.FilterGroupWrap>
            <S.FilterText>Has children</S.FilterText>
            <FormControl
              variant="outlined"
              // error={errors.smokes ? true : false}
            >
              <InputLabel>Children</InputLabel>
              <Select
                value={
                  true
                  // values.smokes === false
                  //   ? false
                  //   : values.smokes === true
                  //   ? true
                  //   : undefined
                }
                onChange={(e) => {
                  // setFieldValue("smokes", e.target.value);
                }}
                variant="outlined"
                label="Children"
              >
                <MenuItem value={true}>Yes</MenuItem>
                <MenuItem value={false}>No</MenuItem>
              </Select>
            </FormControl>
          </S.FilterGroupWrap>
          <S.FilterGroupWrap>
            <S.FilterText>Home Type</S.FilterText>
            <FormControl
              variant="outlined"
              // error={errors.smokes ? true : false}
            >
              <InputLabel>Home Type</InputLabel>
              <Select
                value={
                  true
                  // values.smokes === false
                  //   ? false
                  //   : values.smokes === true
                  //   ? true
                  //   : undefined
                }
                onChange={(e) => {
                  // setFieldValue("smokes", e.target.value);
                }}
                variant="outlined"
                label="Home Type"
              >
                <MenuItem value="House">House</MenuItem>
                <MenuItem value="Apartment">Apartment</MenuItem>
              </Select>
            </FormControl>
          </S.FilterGroupWrap>
          <S.FilterGroupWrap>
            <S.FilterText>Has Yard</S.FilterText>
            <FormControl
              variant="outlined"
              // error={errors.smokes ? true : false}
            >
              <InputLabel>Yard</InputLabel>
              <Select
                value={
                  true
                  // values.smokes === false
                  //   ? false
                  //   : values.smokes === true
                  //   ? true
                  //   : undefined
                }
                onChange={(e) => {
                  // setFieldValue("smokes", e.target.value);
                }}
                variant="outlined"
                label="Yard"
              >
                <MenuItem value={true}>Yes</MenuItem>
                <MenuItem value={false}>No</MenuItem>
              </Select>
            </FormControl>
          </S.FilterGroupWrap>
        </S.FilterContentWrap>
      )}
      <Button variant="contained">Search</Button>
    </S.FilterWrap>
  );
};

const FilterModalContentSchema = () => {
  return useFormik({
    validateOnChange: false,
    initialValues: {
      location: "",
      price: [33, 66],
      hasChildren: "",
      homeType: "",
      smokes: "",
      hasYard: "",
    },
    validate: async (values) => {
      let errors = {};
      let errorExists = false;

      if (values.boarding) {
        if (values.boardingRate <= 0) {
          errors.boardingRate = "Please choose a rate above $0";
          errorExists = true;
        }

        if (values.smokes === undefined) {
          errors.smokes = "Please select an option.";
          errorExists = true;
        }
        if (values.hasYard === undefined) {
          errors.hasYard = "Please select an option.";
          errorExists = true;
        }
        if (values.hasChildren === undefined) {
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
        return errors;
      }

      return true;
    },
    onSubmit: async (values, { resetForm }) => {
      try {
      } catch (e) {}
    },
  });
};

export default FilterModalContent;
