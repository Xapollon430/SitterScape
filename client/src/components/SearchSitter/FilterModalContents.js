import * as S from "./SearchSitter.styles";
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
import { useState } from "react";
import Spinner from "../common/Spinner";

const FilterModalContent = ({
  values,
  errors,
  setFieldValue,
  handleSubmit,
  modalLoading,
}) => {
  const [showMoreFilter, setShowMoreFilter] = useState(false);

  const toggleShowMoreFilter = () => setShowMoreFilter(!showMoreFilter);

  return modalLoading ? (
    <Spinner />
  ) : (
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
          <MenuItem value={"boarding"}>Boarding</MenuItem>
          <MenuItem value={"houseSitting"}>House Sitting</MenuItem>
          <MenuItem value={"walking"}>Dog Walking</MenuItem>
          <MenuItem value={"dropInVisit"}>Drop In Visit</MenuItem>
        </Select>
        {errors.serviceType && (
          <FormHelperText>{errors.serviceType}</FormHelperText>
        )}
      </FormControl>
      <TextField
        value={values.address}
        onChange={(e) => {
          setFieldValue("address", e.target.value);
        }}
        label="Address or Zip Code"
        variant="outlined"
        error={errors.address ? true : false}
        helperText={errors.address}
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

      {values.serviceType === "boarding" && (
        <S.More onClick={toggleShowMoreFilter}>
          More Filters <S.StyledIcon showMoreFilter={showMoreFilter} />
        </S.More>
      )}

      {showMoreFilter && values.serviceType === "boarding" && (
        <S.FilterContentWrap>
          <S.FilterGroupWrap>
            <S.FilterText>Smoking home</S.FilterText>
            <FormControl
              variant="outlined"
              error={errors.smokes ? true : false}
            >
              <InputLabel>Smoking</InputLabel>
              <Select
                value={values.smokes}
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
                value={values.homeType}
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
                value={values.hasYard}
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

export default FilterModalContent;
