import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "@material-ui/core/Slider";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import * as S from "./SearchSitter.styles";

const FilterModalContent = ({ showMoreFilter, toggleShowMoreFilter }) => {
  return (
    <S.FilterWrap>
      <S.FilterTitle>Filter For Sitters</S.FilterTitle>
      <FormControl variant="outlined" fullWidth>
        <InputLabel>Service</InputLabel>
        <Select label="Service">
          <MenuItem value={10}>Boarding</MenuItem>
          <MenuItem value={20}>Home Sitting</MenuItem>
          <MenuItem value={30}>Dog Walking</MenuItem>
          <MenuItem value={30}>Drop In Visit</MenuItem>
        </Select>
      </FormControl>
      <TextField label="Address or Zip Code" variant="outlined" />
      <S.FilterPriceWrap>
        <S.FilterPriceRangeWrap>
          <S.FilterPriceRangeLow>$33</S.FilterPriceRangeLow>
          <S.FilterPriceRangeHigh>$66</S.FilterPriceRangeHigh>
        </S.FilterPriceRangeWrap>
        <Slider
          value={[33, 66]}
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
      <Button variant="contained">Save</Button>
    </S.FilterWrap>
  );
};

export default FilterModalContent;
