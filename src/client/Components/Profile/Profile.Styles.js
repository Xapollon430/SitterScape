import styled from "styled-components";

export const ProfileWrap = styled.div`
  height: calc(100vh - 65px);
  margin: 65px auto 0px auto;
  display: grid;

  @media (max-width: 800px) {
    margin: 63px auto 0px auto;
  }
`;
