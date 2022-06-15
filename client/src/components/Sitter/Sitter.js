import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Sitter = () => {
  const { id: sitterID } = useParams();
  const [sitterInfo, setSitterInfo] = useState({});

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/api/sitter/${sitterID}`)
      .then((response) => response.json())
      .then(setSitterInfo);
  }, []);
  return <h1>123 {sitterInfo.name}</h1>;
};

export default Sitter;
