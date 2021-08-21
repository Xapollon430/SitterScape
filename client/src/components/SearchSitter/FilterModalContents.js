import {
  TextField,
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  FormHelperText,
} from "@material-ui/core";
import * as S from "./SearchSitter.styles";
import { useState } from "react";
import { useFormik } from "formik";

const FilterModalContent = () => {
  const [showMoreFilter, setShowMoreFilter] = useState(false);

  const { handleSubmit, setFieldValue, values, errors } =
    FilterModalContentSchema();

  console.log(errors);

  const toggleShowMoreFilter = () => setShowMoreFilter(!showMoreFilter);

  return (
    <S.FilterWrap>
      <S.FilterTitle>Find your pawfect sitter!</S.FilterTitle>
      <FormControl variant="outlined" error={errors.serviceType ? true : false}>
        <InputLabel>Service</InputLabel>
        <Select
          value={values.serviceType}
          onChange={(e) => {
            setFieldValue("serviceType", e.target.value);
          }}
          label="Service"
        >
          <MenuItem value={"Boarding"}>Boarding</MenuItem>
          <MenuItem value={"Home Sitting"}>Home Sitting</MenuItem>
          <MenuItem value={"Dog Walking"}>Dog Walking</MenuItem>
          <MenuItem value={"Drop In Visit"}>Drop In Visit</MenuItem>
        </Select>
        {errors.serviceType && (
          <FormHelperText>{errors.serviceType}</FormHelperText>
        )}
      </FormControl>
      <TextField
        value={values.location}
        onChange={(e) => {
          setFieldValue("location", e.target.value);
        }}
        label="Address or Zip Code"
        variant="outlined"
        error={errors.location ? true : false}
        helperText={errors.location}
      />
      <S.FilterPriceWrap>
        <S.FilterPriceRangeWrap>
          <S.FilterPriceRangeLow>${values.price[0]}</S.FilterPriceRangeLow>
          <S.FilterPriceRangeHigh>${values.price[1]}</S.FilterPriceRangeHigh>
        </S.FilterPriceRangeWrap>
        <Slider
          value={values.price}
          onChange={(e, value) => setFieldValue("price", value)}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
        />
      </S.FilterPriceWrap>

      {values.serviceType === "Boarding" && (
        <S.More onClick={toggleShowMoreFilter}>
          More Filters <S.StyledIcon showMoreFilter={showMoreFilter} />
        </S.More>
      )}

      {showMoreFilter && values.serviceType === "Boarding" && (
        <S.FilterContentWrap>
          <S.FilterGroupWrap>
            <S.FilterText>Smoking home</S.FilterText>
            <FormControl
              variant="outlined"
              error={errors.smokes ? true : false}
            >
              <InputLabel>Smoking</InputLabel>
              <Select
                value={
                  values.smokes === false
                    ? false
                    : values.smokes === true
                    ? true
                    : undefined
                }
                onChange={(e) => {
                  setFieldValue("smokes", e.target.value);
                }}
                variant="outlined"
                label="Smoking"
              >
                <MenuItem value={true}>Yes</MenuItem>
                <MenuItem value={false}>No</MenuItem>
              </Select>
              {errors.smokes && (
                <FormHelperText>{errors.smokes}</FormHelperText>
              )}
            </FormControl>
          </S.FilterGroupWrap>
          <S.FilterGroupWrap>
            <S.FilterText>Has children</S.FilterText>
            <FormControl
              variant="outlined"
              error={errors.hasChildren ? true : false}
            >
              <InputLabel>Children</InputLabel>
              <Select
                value={values.hasChildren}
                onChange={(e) => {
                  setFieldValue("hasChildren", e.target.value);
                }}
                variant="outlined"
                label="Children"
              >
                <MenuItem value={true}>Yes</MenuItem>
                <MenuItem value={false}>No</MenuItem>
              </Select>
              {errors.hasChildren && (
                <FormHelperText>{errors.hasChildren}</FormHelperText>
              )}
            </FormControl>
          </S.FilterGroupWrap>
          <S.FilterGroupWrap>
            <S.FilterText>Home Type</S.FilterText>
            <FormControl
              variant="outlined"
              error={errors.homeType ? true : false}
            >
              <InputLabel>Home Type</InputLabel>
              <Select
                value={
                  values.homeType === false
                    ? false
                    : values.homeType === true
                    ? true
                    : undefined
                }
                onChange={(e) => {
                  setFieldValue("homeType", e.target.value);
                }}
                variant="outlined"
                label="Home Type"
              >
                <MenuItem value="House">House</MenuItem>
                <MenuItem value="Apartment">Apartment</MenuItem>
              </Select>
              {errors.homeType && (
                <FormHelperText>{errors.homeType}</FormHelperText>
              )}
            </FormControl>
          </S.FilterGroupWrap>
          <S.FilterGroupWrap>
            <S.FilterText>Has Yard</S.FilterText>
            <FormControl
              variant="outlined"
              error={errors.hasYard ? true : false}
            >
              <InputLabel>Yard</InputLabel>
              <Select
                value={
                  values.hasYard === false
                    ? false
                    : values.hasYard === true
                    ? true
                    : undefined
                }
                onChange={(e) => {
                  setFieldValue("hasYard", e.target.value);
                }}
                variant="outlined"
                label="Yard"
              >
                <MenuItem value={true}>Yes</MenuItem>
                <MenuItem value={false}>No</MenuItem>
              </Select>
              {errors.hasYard && (
                <FormHelperText>{errors.hasYard}</FormHelperText>
              )}
            </FormControl>
          </S.FilterGroupWrap>
        </S.FilterContentWrap>
      )}
      <Button onClick={handleSubmit} variant="contained">
        Search
      </Button>
    </S.FilterWrap>
  );
};

const FilterModalContentSchema = () => {
  return useFormik({
    validateOnChange: false,
    initialValues: {
      serviceType: "",
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

      if (values.serviceType === "") {
        errors.serviceType = "Please select a service.";
        errorExists = true;
      }

      if (values.location === "") {
        errors.location = "Please enter your location.";
        errorExists = true;
      }

      if (errorExists) {
        return errors;
      }

      return true;
    },
    onSubmit: async (values) => {
      try {
        console.log(values);
      } catch (e) {}
    },
  });
};

export default FilterModalContent;
