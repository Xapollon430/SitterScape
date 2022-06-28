import { Fragment } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SitterHeader from "./Header/SitterHeader";

const Sitter = () => {
  const { id: sitterID } = useParams();
  const [sitterInfo, setSitterInfo] = useState({});

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/api/sitter/${sitterID}`)
      .then((response) => response.json())
      .then(setSitterInfo);
  }, []);

  return (
    <Fragment>
      <SitterHeader />
      <h1>{sitterInfo.name}</h1> <h1>{sitterInfo.name}</h1>{" "}
      <h1>{sitterInfo.name}</h1> <h1>{sitterInfo.name}</h1>
      <h1>{sitterInfo.name}</h1>
      <h1>{sitterInfo.name}</h1>
      <h1>{sitterInfo.name}</h1>
      <h1>{sitterInfo.name}</h1> <h1>{sitterInfo.name}</h1>
      <h1>{sitterInfo.name}</h1>
      <h1>{sitterInfo.name}</h1>
      <h1>{sitterInfo.name}</h1>
      <h1>{sitterInfo.name}</h1>
      <h1>{sitterInfo.name}</h1>
      <h1>{sitterInfo.name}</h1>
      <h1>{sitterInfo.name}</h1>
      <h1>{sitterInfo.name}</h1>
      <h1>{sitterInfo.name}</h1>
      <h1>{sitterInfo.name}</h1>
      <h1>{sitterInfo.name}</h1>
    </Fragment>
  );
};

export default Sitter;
