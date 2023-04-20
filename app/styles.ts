import { StatusBar } from "react-native";
import styled from "styled-components/native";
import { GestureHandlerRootView as GestureHandlerRootViewStyled } from "react-native-gesture-handler";

import colors from "../src/styles/colors";

export const GestureHandlerRootView = styled(GestureHandlerRootViewStyled)`
  flex: 1;
`;

export const ContainerSafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white};
`;
