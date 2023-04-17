import { Dimensions } from "react-native";
import styled from "styled-components/native";
import Animated from "react-native-reanimated";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

export const BottomSheet = styled(Animated.View)`
  height: ${SCREEN_HEIGHT}px;
  width: 100%;
  background-color: white;
  position: absolute;
  top: ${SCREEN_HEIGHT / 1.5}px;
  border-radius: 25px;
`;

export const Line = styled.View`
  width: 75px;
  height: 5px;
  background-color: grey;
  align-self: center;
  margin-vertical: 15px;
  border-radius: 20;
`;

export const FlatList = styled.FlatList`
  width: 100%;
  margin: 20px 0px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
