import { Fragment } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "./Sitter.styles";
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
      <SitterHeader sitterID={sitterID} />
      <S.SitterWrapper>img</S.SitterWrapper>
    </Fragment>
  );
};

export default Sitter;
