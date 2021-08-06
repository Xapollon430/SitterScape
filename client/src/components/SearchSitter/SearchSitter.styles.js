import styled from "styled-components";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const ContentWrap = styled.div`
  height: calc(100vh - 65px);
  padding-top: 65px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    padding-top: 60px;
  }
`;

export const ProfilesWrap = styled.div`
  overflow-y: scroll;
  @media (max-width: 800px) {
    display: ${({ showMap }) => (showMap ? "none" : "block")};
  }
`;

export const LeafletMap = styled.div`
  @media (max-width: 800px) {
    display: ${({ showMap }) => (showMap ? "block" : "none")};
  }
`;

export const Profile = styled.div`
  width: 100%;
  padding: 15px;
  display: grid;
  grid-template-columns: 175px 5fr 1fr;
  grid-gap: 15px;
  box-sizing: border-box;
  box-shadow: 0 4px 2px -2px rgb(0 0 0 / 20%);

  @media (max-width: 500px) {
    grid-template-columns: 3fr 1fr;
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 175px;
  object-fit: cover;
  @media (max-width: 500px) {
    grid-column: 1 / span2;
    width: 250px;
    justify-self: center;
  }
`;

export const ProfileDetails = styled.div`
  display: grid;
  grid-template-rows: auto auto auto auto;
`;

export const ProfileName = styled.h4`
  color: rgb(2, 129, 162);
  font-size: 26px;
  margin: 0px;
`;

export const ProfileHeadline = styled.b`
  font-size: 14px;
`;

export const ProfileAddress = styled.b`
  font-size: 12px;
`;

export const ProfilePrice = styled.div`
  align-self: center;
  justify-self: center;
`;

export const ProfileComment = styled.span``;

export const ProfileNumber = styled.span`
  font-size: 26px;
  font-weight: 600;
  color: black;
  padding-right: 0.25em;
`;

export const PriceText = styled.b`
  display: block;
  font-size: 15px;
  color: rgb(102, 114, 124);
`;

export const Rate = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: rgb(204, 78, 0);
`;

export const FilterWrap = styled.div`
  display: grid;
  grid-template-rows: 30px 1fr 1fr 1fr;
  grid-gap: 10px;
`;

export const FilterTitle = styled.h2`
  margin: 0px;
`;

export const FilterPriceWrap = styled.div``;

export const FilterPriceRangeWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const FilterPriceRangeLow = styled.b`
  font-size: 1.2rem;
  justify-self: left;
`;

export const FilterPriceRangeHigh = styled.b`
  font-size: 1.2rem;
  justify-self: right;
`;

export const StyledIcon = styled((props) => {
  return (
    <FontAwesomeIcon
      {...props}
      icon={props.showMoreFilter ? faChevronDown : faChevronUp}
    />
  );
})`
  padding-left: 8px;
`;

export const More = styled.b`
  font-size: 1.2rem;
  cursor: pointer;
  color: rgb(20, 85, 94);
`;

export const FilterText = styled.b``;

export const FilterGroupWrap = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
`;

export const FilterContentWrap = styled.div`
  display: grid;
  grid-gap: 15px;
`;

export const StyledSelect = styled(Select)``;

export const StyledText = styled(TextField)``;

export const FilterMapToggleButton = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 100px 100px;
  left: 50%;
  bottom: 50px;
  transform: translate(-50%, -50%);
  z-index: 1010;

  @media (min-width: 800px) {
    display: none;
  }
`;

export const MapButton = styled(Button)`
  &&& {
    /* border: 2px solid black;
    border-right: none; */

    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }
`;

export const FilterButton = styled(Button)`
  &&& {
    /* border: 2px solid black;
    border-left: none; */
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
`;
