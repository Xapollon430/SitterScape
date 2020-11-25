import React, { Fragment, useEffect, useRef } from "react";
import L from "leaflet";
import styled from "styled-components";

const LMap = styled.div`
  height: 180px;
  width: 500px;
`;

const FindSitter = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    var mymap = L.map(mapRef.current).setView([51.505, -0.09], 13);

    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mymap);
  }, []);

  return (
    <Fragment>
      <LMap ref={mapRef}></LMap>
      Find a sitter here
    </Fragment>
  );
};

export default FindSitter;
