import React, { Fragment, useEffect, useRef } from "react";
import L from "leaflet";

import styled from "styled-components";

const LMap = styled.div`
  height: 180px;
  max-width: 600px;
  min-width: 200px;
  width: 50vw;
`;

const FindSitter = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const mymap = L.map(mapRef.current).setView([51.505, -0.09], 13);
    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
    ).addTo(mymap);
  }, []);

  return (
    <Fragment>
      <LMap ref={mapRef}></LMap>
      Find a sitter here
    </Fragment>
  );
};

export default FindSitter;
