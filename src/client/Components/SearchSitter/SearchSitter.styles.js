import styled from "styled-components";

export const ContentWrap = styled.div`
  margin-top: 200px;
  display: grid;
  grid-template-columns: 6fr 4fr;
  grid-template-areas: "sitters map";
`;

export const LeafletMap = styled.div`
  width: 100%;
  max-width: 800px;
  min-width: 200px;
  grid-area: map;
`;

export const SittersWrap = styled.div`
  grid-area: sitters;
`;
