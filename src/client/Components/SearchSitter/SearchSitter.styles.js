import styled from "styled-components";

export const ContentWrap = styled.div`
  height: calc(100vh - 65px);
  margin: 65px auto 0px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 800px) {
    margin: 63px auto 0px auto;
  }
`;

export const LeafletMap = styled.div`
  height: 100%;
  min-width: 200px;
`;

export const ProfilesWrap = styled.div`
  height: calc(100vh - 65px);
  overflow-y: scroll;
`;

export const Profile = styled.div`
  height: 100px;
`;
