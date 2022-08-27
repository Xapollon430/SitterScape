import { Fragment, useContext, useState } from "react";
import {
  FormControlLabel,
  Switch,
  TextField,
  Radio,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  FormHelperText,
} from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { StoreContext } from "../../../store/store";
import * as S from "./SitterInfo.styles";
import SitterInfoInit from "./SitterInfoSchema";
import defaultUserImage from "../../../images/default-user.png";

const SitterInfo = () => {
  const [state, _] = useContext(StoreContext);
  const [showErrorSnackbar, setShowErrorSnackbar] = useState(false);

  const { handleSubmit, handleChange, setFieldValue, values, errors } =
    SitterInfoInit(setShowErrorSnackbar);

  console.log(values);

  return (
    <Fragment>
      <S.ServiceWrap>
        <S.ServiceType>
          <S.ServiceName>Boarding</S.ServiceName>
          <S.Text>
            Your client's pets come to your home and stay overnight.
          </S.Text>
        </S.ServiceType>
        <S.ServiceOption>
          <FormControlLabel
            value="bottom"
            control={
              <Switch
                checked={values.boarding}
                onChange={(e) => {
                  setFieldValue("boarding", e.target.checked);
                }}
                color="secondary"
              />
            }
            label={values.boarding ? "Active" : "Inactive"}
            labelPlacement="bottom"
          />
        </S.ServiceOption>
        {values.boarding && (
          <Fragment>
            <S.Text>What do you want clients to pay per dog per night?</S.Text>
            <TextField
              onChange={(e) => {
                setFieldValue("boardingRate", e.target.value);
              }}
              InputProps={{ inputProps: { min: 0, max: 150 } }}
              label="$"
              value={values.boardingRate}
              type="number"
              variant="filled"
              error={errors.boardingRate ? true : false}
              helperText={errors.boardingRate}
            />
            <S.Text>Are there any smokers in your house?</S.Text>
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
            <S.Text>Are there any children in your house?</S.Text>

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

            <S.Text>What type of a home do you live in?</S.Text>
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
            <S.Text>Do you have a yard?</S.Text>

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
                label="hasYard"
              >
                <MenuItem value={true}>Yes</MenuItem>
                <MenuItem value={false}>No</MenuItem>
              </Select>
              {errors.hasYard && (
                <FormHelperText>{errors.hasYard}</FormHelperText>
              )}
            </FormControl>
          </Fragment>
        )}
      </S.ServiceWrap>
      <S.ServiceWrap>
        <S.ServiceType>
          <S.ServiceName>House Sitting</S.ServiceName>
          <S.Text>
            You go to your client's home and stay overnight, taking care of
            their dogs and home.
          </S.Text>
        </S.ServiceType>
        <S.ServiceOption>
          <FormControlLabel
            value="bottom"
            control={
              <Switch
                checked={values.houseSitting}
                onChange={(e) => {
                  setFieldValue("houseSitting", e.target.checked);
                }}
                color="secondary"
              />
            }
            label={values.houseSitting ? "Active" : "Inactive"}
            labelPlacement="bottom"
          />
        </S.ServiceOption>
        {values.houseSitting && (
          <Fragment>
            <S.Text>What do you want clients to pay per dog per night?</S.Text>
            <TextField
              onChange={(e) => {
                setFieldValue("houseSittingRate", e.target.value);
              }}
              label="$"
              type="number"
              InputProps={{ inputProps: { min: 0, max: 150 } }}
              value={values.houseSittingRate}
              variant="filled"
              error={errors.houseSittingRate ? true : false}
              helperText={errors.houseSittingRate}
            />
          </Fragment>
        )}
      </S.ServiceWrap>
      <S.ServiceWrap>
        <S.ServiceType>
          <S.ServiceName>Drop-In Visits</S.ServiceName>
          <S.Text>
            Your clients ask you to do 30-minute home visits to feed and play
            with their pets.
          </S.Text>
        </S.ServiceType>
        <S.ServiceOption>
          <FormControlLabel
            value="bottom"
            control={
              <Switch
                checked={values.dropInVisit}
                onChange={(e) => {
                  setFieldValue("dropInVisit", e.target.checked);
                }}
                color="secondary"
              />
            }
            label={values.dropInVisit ? "Active" : "Inactive"}
            labelPlacement="bottom"
          />
        </S.ServiceOption>
        {values.dropInVisit && (
          <Fragment>
            <S.Text>What do you want clients to pay per dog per visit?</S.Text>
            <TextField
              onChange={(e) => {
                setFieldValue("dropInVisitRate", e.target.value);
              }}
              label="$"
              type="number"
              InputProps={{ inputProps: { min: 0, max: 150 } }}
              value={values.dropInVisitRate}
              variant="filled"
              error={errors.dropInVisitRate}
              helperText={errors.dropInVisitRate}
            />
          </Fragment>
        )}
      </S.ServiceWrap>
      <S.ServiceWrap>
        <S.ServiceType>
          <S.ServiceName>Dog Walking</S.ServiceName>
          <S.Text>
            Your clients request 30-minute dog walks in their neighborhood.
          </S.Text>
        </S.ServiceType>
        <S.ServiceOption>
          <FormControlLabel
            value="bottom"
            control={
              <Switch
                checked={values.walking}
                onChange={(e) => {
                  setFieldValue("walking", e.target.checked);
                }}
                color="secondary"
              />
            }
            label={values.walking ? "Active" : "Inactive"}
            labelPlacement="bottom"
          />
        </S.ServiceOption>
        {values.walking && (
          <Fragment>
            <S.Text>What do you want clients to pay for one dog walk?</S.Text>
            <TextField
              onChange={(e) => {
                setFieldValue("walkingRate", e.target.value);
              }}
              InputProps={{ inputProps: { min: 0, max: 150 } }}
              label="$"
              type="number"
              value={values.walkingRate}
              variant="filled"
              error={errors.walkingRate}
              helperText={errors.walkingRate}
            />
          </Fragment>
        )}
      </S.ServiceWrap>
      <S.PetPreferencesWrap>
        <S.PetPreferences>Your Pet Preferences </S.PetPreferences>
        <S.PetPreferencesText>
          What size pets do you prefer offering services to?
          <S.ErrorText>{errors.petPreferences}</S.ErrorText>
        </S.PetPreferencesText>
        <S.PetPreferencesRadioWrap>
          <FormControlLabel
            label="Small 0-15 lbs"
            labelPlacement="bottom"
            value={values.petPreferencesSmall}
            control={
              <Radio
                checked={values.petPreferencesSmall}
                onClick={() => {
                  setFieldValue(
                    "petPreferencesSmall",
                    !values.petPreferencesSmall
                  );
                }}
              />
            }
          />
          <FormControlLabel
            label="Medium 16-40 lbs"
            labelPlacement="bottom"
            control={
              <Radio
                checked={values.petPreferencesMedium}
                onClick={() => {
                  setFieldValue(
                    "petPreferencesMedium",
                    !values.petPreferencesMedium
                  );
                }}
              />
            }
          />
          <FormControlLabel
            label="Large 41-100 lbs"
            labelPlacement="bottom"
            value={values.petPreferencesLarge}
            control={
              <Radio
                checked={values.petPreferencesLarge}
                onClick={() => {
                  setFieldValue(
                    "petPreferencesLarge",
                    !values.petPreferencesLarge
                  );
                }}
              />
            }
          />
          <FormControlLabel
            label="Giant 100+ lbs"
            labelPlacement="bottom"
            value={values.petPreferencesGiant}
            control={
              <Radio
                checked={values.petPreferencesGiant}
                onClick={() => {
                  setFieldValue(
                    "petPreferencesGiant",
                    !values.petPreferencesGiant
                  );
                }}
              />
            }
          />
        </S.PetPreferencesRadioWrap>
      </S.PetPreferencesWrap>
      <S.AddressWrap>
        <S.InfoText>Add Your Address</S.InfoText>
        <S.AddressField
          name="address"
          variant="outlined"
          label="Your Address"
          value={values.address}
          onChange={handleChange}
          error={errors.address ? true : false}
          helperText={errors.address}
        />
        <S.AddressInfo>Your address will not be shared publicly.</S.AddressInfo>
        <TextField
          name="city"
          label="Your City"
          variant="outlined"
          value={values.city}
          onChange={handleChange}
          error={errors.city ? true : false}
          helperText={errors.city}
        />
        <FormControl variant="outlined" error={errors.state ? true : false}>
          <InputLabel>State</InputLabel>
          <Select
            name="state"
            value={values.state}
            placeholder="Your State"
            variant="outlined"
            label="Your State"
            onChange={handleChange}
            MenuProps={{ style: { maxHeight: "400px" } }}
          >
            <MenuItem value="AK">Alaska</MenuItem>
            <MenuItem value="AL">Alabama</MenuItem>
            <MenuItem value="AZ">Arizona</MenuItem>
            <MenuItem value="AR">Arkansas</MenuItem>
            <MenuItem value="CA">California</MenuItem>
            <MenuItem value="CO">Colorado</MenuItem>
            <MenuItem value="CT">Connecticut</MenuItem>
            <MenuItem value="DE">Delaware</MenuItem>
            <MenuItem value="DC">District Of Columbia</MenuItem>
            <MenuItem value="FL">Florida</MenuItem>
            <MenuItem value="GA">Georgia</MenuItem>
            <MenuItem value="HI">Hawaii</MenuItem>
            <MenuItem value="ID">Idaho</MenuItem>
            <MenuItem value="IL">Illinois</MenuItem>
            <MenuItem value="IN">Indiana</MenuItem>
            <MenuItem value="IA">Iowa</MenuItem>
            <MenuItem value="KS">Kansas</MenuItem>
            <MenuItem value="KY">Kentucky</MenuItem>
            <MenuItem value="LA">Louisiana</MenuItem>
            <MenuItem value="ME">Maine</MenuItem>
            <MenuItem value="MD">Maryland</MenuItem>
            <MenuItem value="MA">Massachusetts</MenuItem>
            <MenuItem value="MI">Michigan</MenuItem>
            <MenuItem value="MN">Minnesota</MenuItem>
            <MenuItem value="MS">Mississippi</MenuItem>
            <MenuItem value="MO">Missouri</MenuItem>
            <MenuItem value="MT">Montana</MenuItem>
            <MenuItem value="NE">Nebraska</MenuItem>
            <MenuItem value="NV">Nevada</MenuItem>
            <MenuItem value="NH">New Hampshire</MenuItem>
            <MenuItem value="NJ">New Jersey</MenuItem>
            <MenuItem value="NM">New Mexico</MenuItem>
            <MenuItem value="NY">New York</MenuItem>
            <MenuItem value="NC">North Carolina</MenuItem>
            <MenuItem value="ND">North Dakota</MenuItem>
            <MenuItem value="OH">Ohio</MenuItem>
            <MenuItem value="OK">Oklahoma</MenuItem>
            <MenuItem value="OR">Oregon</MenuItem>
            <MenuItem value="PA">Pennsylvania</MenuItem>
            <MenuItem value="RI">Rhode Island</MenuItem>
            <MenuItem value="SC">South Carolina</MenuItem>
            <MenuItem value="SD">South Dakota</MenuItem>
            <MenuItem value="TN">Tennessee</MenuItem>
            <MenuItem value="TX">Texas</MenuItem>
            <MenuItem value="UT">Utah</MenuItem>
            <MenuItem value="VT">Vermont</MenuItem>
            <MenuItem value="VA">Virginia</MenuItem>
            <MenuItem value="WA">Washington</MenuItem>
            <MenuItem value="WV">West Virginia</MenuItem>
            <MenuItem value="WI">Wisconsin</MenuItem>
            <MenuItem value="WY">Wyoming</MenuItem>
          </Select>
          {errors.state && <FormHelperText>{errors.state}</FormHelperText>}
        </FormControl>
        <TextField
          name="zip"
          variant="outlined"
          label="ZIP/postal"
          value={values.zip}
          error={errors.zip ? true : false}
          helperText={errors.zip}
          onChange={handleChange}
        />
      </S.AddressWrap>
      <S.ExperienceWrap>
        <S.InfoText>Your Experience</S.InfoText>
        <S.YearsOfExperienceWrap>
          <S.YearsOfExperienceText>
            How many years of experience do you have?
          </S.YearsOfExperienceText>
          <TextField
            onChange={(e) => {
              setFieldValue("yearsOfExperience", e.target.value);
            }}
            InputProps={{ inputProps: { min: 0 } }}
            value={values.yearsOfExperience}
            type="number"
            variant="filled"
          />
        </S.YearsOfExperienceWrap>
        <S.Text>Write an eye-catching headline</S.Text>
        <TextField
          label="Your headline"
          variant="outlined"
          defaultValue={values.headline}
          onBlur={(e) => {
            setFieldValue("headline", e.target.value);
          }}
          fullWidth
          error={errors.headline ? true : false}
          helperText={errors.headline}
        />
        <S.Text>
          Craft an engaging "About Me". We are recommending 2 paragraphs :)
        </S.Text>

        <TextField
          label="About me"
          multiline
          minRows={8}
          onBlur={(e) => {
            setFieldValue("aboutMe", e.target.value);
          }}
          fullWidth
          defaultValue={values.aboutMe}
          variant="outlined"
          error={errors.aboutMe ? true : false}
          helperText={errors.aboutMe}
          inputProps={{ maxLength: 5000 }}
        />
      </S.ExperienceWrap>
      <S.PhotoWrap>
        <S.PhotoTextWrap>
          <S.InfoText>Profile Image</S.InfoText>
          <S.PhotoTextExplanation>
            This is the first photo pet owners will see. Build trust! Well-lit,
            clear frontal face photos (no sunglasses) are recommended.
          </S.PhotoTextExplanation>
          <S.ErrorText>{errors.profilePicture}</S.ErrorText>
          <S.UploadButton
            type="file"
            id="file"
            onChange={(e) =>
              setFieldValue("profilePicture", e.currentTarget.files[0])
            }
          />
        </S.PhotoTextWrap>
        <S.UserImage src={state.user.profilePicture || defaultUserImage} />
      </S.PhotoWrap>
      <Snackbar
        style={{ marginTop: "50px" }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={showErrorSnackbar ? true : false}
      >
        <Alert variant="filled" severity="error">
          There is an error!
        </Alert>
      </Snackbar>
      <Button onClick={handleSubmit} variant="contained">
        Save
      </Button>
    </Fragment>
  );
};

export default SitterInfo;
