import { Dimensions } from "react-native";
import styled from "styled-components/native";
import Animated from "react-native-reanimated";

import colors from "../../styles/colors";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

export const BottomSheet = styled(Animated.View)`
  height: ${SCREEN_HEIGHT}px;
  width: 100%;
  background-color: ${colors.white};
  position: absolute;
  top: ${SCREEN_HEIGHT}px;
  border-radius: 25px;
`;

export const Line = styled.View`
  width: 75px;
  height: 5px;
  background-color: ${colors.grey};
  align-self: center;
  margin-vertical: 15px;
  border-radius: 20;
`;
