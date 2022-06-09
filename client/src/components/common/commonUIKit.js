import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NameWrapper = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 70%;
  display: inline-block;
  margin-top: 5px;
`;

export const NameDropdownIcon = styled(FontAwesomeIcon)`
  padding-bottom: 3px;
`;
