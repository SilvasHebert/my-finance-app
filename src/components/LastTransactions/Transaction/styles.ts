import styled from "styled-components/native";

import colors from "../../../styles/colors";

export const Container = styled.View`
  width: 100%;
  background-color: ${colors.white};
  padding: 15px;
  margin: 5px 0px;
  border: 3px ${colors.black} solid;
  border-bottom-width: 7px;
  border-radius: 12px;
`;
