import { Fragment } from "react";
import {
  FormControlLabel,
  Switch,
  TextField,
  Radio,
  RadioGroup,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import * as S from "./SitterInfo.styles";

const SitterInfo = () => {
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
            control={<Switch color="secondary" />}
            label="Inactive"
            labelPlacement="bottom"
          />
        </S.ServiceOption>
        <S.Text>What do you want clients to pay per dog per night?</S.Text>
        <TextField disabled={true} label="$" type="number" variant="filled" />
        <S.Text>Are there any smokers in your house? </S.Text>
        <S.RadioWrap>
          <RadioGroup
            value={true}
            name="smokes"
            onChange={(e) => {
              console.log(e.target);
            }}
            row
          >
            <FormControlLabel value={false} control={<Radio />} label="No" />
            <FormControlLabel value={true} control={<Radio />} label="Yes" />
          </RadioGroup>
        </S.RadioWrap>
        <S.Text>Are there any children in your house? </S.Text>

        <S.RadioWrap>
          <RadioGroup
            value={true}
            name="hasChildren"
            onChange={(e) => {
              console.log(e.target);
            }}
            row
          >
            <FormControlLabel value={false} control={<Radio />} label="No" />
            <FormControlLabel value={true} control={<Radio />} label="Yes" />
          </RadioGroup>
        </S.RadioWrap>
        <S.Text>What type of a home do you live in?</S.Text>
        <FormControl variant="outlined">
          <InputLabel>Home Type</InputLabel>
          <Select
            // error={errors.state && touched.state}
            // value={values.state}
            // onChange={handleChange}
            // onBlur={handleBlur}
            name="state"
            placeholder="Your State"
            variant="outlined"
            label="Your State"
            variant="outlined"
          >
            <MenuItem value="house">House</MenuItem>
            <MenuItem value="apartment">Apartment</MenuItem>
          </Select>
        </FormControl>
        <S.Text>Do you have a yard?</S.Text>

        <S.RadioWrap>
          <RadioGroup
            value={true}
            name="hasYard"
            onChange={(e) => {
              console.log(e.target);
            }}
            row
          >
            <FormControlLabel value={false} control={<Radio />} label="No" />
            <FormControlLabel value={true} control={<Radio />} label="Yes" />
          </RadioGroup>
        </S.RadioWrap>
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
            control={<Switch color="secondary" />}
            label="Inactive"
            labelPlacement="bottom"
          />
        </S.ServiceOption>
        <S.Text>What do you want clients to pay per dog per night?</S.Text>
        <TextField label="$" type="number" variant="filled" />
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
            control={<Switch color="secondary" />}
            label="Inactive"
            labelPlacement="bottom"
          />
        </S.ServiceOption>
        <S.Text>What do you want clients to pay per dog per visit?</S.Text>
        <TextField label="$" type="number" variant="filled" />
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
            control={<Switch color="secondary" />}
            label="Inactive"
            labelPlacement="bottom"
          />
        </S.ServiceOption>
        <S.Text>What do you want clients to pay for one dog walk?</S.Text>
        <TextField label="$" type="number" variant="filled" />
      </S.ServiceWrap>
      <S.PetPreferencesWrap>
        {" "}
        <S.PetPreferences>Your Pet Preferences </S.PetPreferences>
        <S.PetPreferencesText>
          What size pets do you prefer offering services to?
        </S.PetPreferencesText>
        <S.PetPreferencesRadioWrap>
          <RadioGroup
            value={true}
            name="hasYard"
            onChange={(e) => {
              console.log(e.target);
            }}
            row
          >
            <FormControlLabel
              label="Small 0-15 lbs"
              labelPlacement="bottom"
              value={false}
              control={<Radio />}
            />
            <FormControlLabel
              label="Medium 16-40 lbs"
              labelPlacement="bottom"
              value={false}
              control={<Radio />}
            />
            <FormControlLabel
              label="Large 41-100 lbs"
              labelPlacement="bottom"
              value={false}
              control={<Radio />}
            />
            <FormControlLabel
              label="Giant 100+ lbs"
              labelPlacement="bottom"
              value={false}
              control={<Radio />}
            />
          </RadioGroup>
        </S.PetPreferencesRadioWrap>
      </S.PetPreferencesWrap>

      <S.AdressWrap>
        <S.InfoText>Add Your Address</S.InfoText>
        <S.AdressField
          name="address"
          variant="outlined"
          label="Your Address"
          variant="outlined"
        />
        <TextField
          name="city"
          variant="outlined"
          label="Your City"
          variant="outlined"
        />
        <FormControl variant="outlined">
          <InputLabel>State</InputLabel>
          <Select
            name="state"
            placeholder="Your State"
            variant="outlined"
            label="Your State"
            variant="outlined"
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
        </FormControl>
        <TextField
          name="zip"
          variant="outlined"
          label="Your Zip"
          variant="outlined"
          label="ZIP/postal"
          variant="outlined"
        />
      </S.AdressWrap>
      <S.ExperienceWrap>
        <S.InfoText>Your Experience</S.InfoText>
        <S.YearsOfExperienceWrap>
          <S.YearsOfExperienceText>
            How many years of experience do you have?
          </S.YearsOfExperienceText>
          <TextField type="number" variant="filled" />
        </S.YearsOfExperienceWrap>
        <S.Text>Write an eye-catching headline</S.Text>
        <TextField
          name="headline"
          label="Your headline"
          variant="outlined"
          fullWidth
        ></TextField>
        <S.Text>Craft an engaging "About Me"</S.Text>

        <TextField
          label="About me"
          multiline
          rows={8}
          value={123}
          fullWidth
          variant="outlined"
        />
      </S.ExperienceWrap>
      <S.PhotoWrap>
        <S.PhotoTextWrap>
          <S.InfoText>Profile Image</S.InfoText>
          <S.PhotoTextExplanation>
            This is the first photo pet owners will see. Build trust! Well-lit,
            clear frontal face photos (no sunglasses) are recommended.
          </S.PhotoTextExplanation>
          <S.UploadButton
            type="file"
            id="file"
            onChange={(e) =>
              setFieldValue("profilePicture", e.currentTarget.files[0])
            }
          />
        </S.PhotoTextWrap>
        <S.UserImage
          src={`${process.env.SITTERSCAPE_API_URL}/static/images/default-user.png`}
        />
      </S.PhotoWrap>
      <Button variant="contained">Save</Button>
    </Fragment>
  );
};

export default SitterInfo;
