import ProfileHeader from "./Header/ProfileHeader";
import * as S from "./Profile.Styles";
import { TextField } from "@material-ui/core";
import { Fragment } from "react";

const Profile = () => {
  let x;
  return (
    <Fragment>
      <ProfileHeader />
      <S.ProfileWrap>
        <S.FormWrap>
          <S.PersonalInfoWrap>
            <S.PersonalInfoText>
              Add Your Personal Information
            </S.PersonalInfoText>
            <TextField
              id="outlined-basic"
              label="Your Name"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Your Name"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Your Name"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Your Name"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Your Name"
              variant="outlined"
            />
          </S.PersonalInfoWrap>
        </S.FormWrap>
      </S.ProfileWrap>
    </Fragment>
  );
};

export default Profile;
