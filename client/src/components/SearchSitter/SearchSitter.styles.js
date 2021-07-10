import styled from "styled-components";

export const ContentWrap = styled.div`
  height: calc(100vh - 65px);
  padding-top: 65px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 800px) {
    padding-top: 63px;
  }
`;

export const LeafletMap = styled.div`
  height: 100%;
  width: 100%;
  min-width: 200px;
`;

export const ProfilesWrap = styled.div`
  height: calc(100vh - 65px);
  overflow-y: scroll;
`;

export const Profile = styled.div`
  width: 100%;
  padding: 15px;
  display: grid;
  grid-template-columns: 175px 5fr 1fr;
  grid-gap: 15px;
  box-sizing: border-box;
  box-shadow: 0 4px 2px -2px rgb(0 0 0 / 20%);
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 175px;
  object-fit: cover;
  @media (max-width: 800px) {
    height: 75px;
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
