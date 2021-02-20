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
        <TextField id="outlined-basic" label="Your Name" variant="outlined" />
        <TextField id="outlined-basic" label="Your Name" variant="outlined" />
      </S.ProfileWrap>
    </Fragment>
  );
};

export default Profile;
