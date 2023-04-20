import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import colors from "../../styles/colors";

export const Container = styled(LinearGradient)`
  width: 100%;
  height: 30%;
  padding: ${StatusBar.currentHeight}px 10px 10px 10px;
  background-color: ${colors.grey};
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;
