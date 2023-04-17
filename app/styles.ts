import { StatusBar } from "react-native";
import styled from "styled-components/native";
import { GestureHandlerRootView as GestureHandlerRootViewStyled } from "react-native-gesture-handler";

export const GestureHandlerRootView = styled(GestureHandlerRootViewStyled)`
  flex: 1;
`;

export const ContainerSafeAreaView = styled.SafeAreaView`
  margin-top: ${StatusBar.currentHeight};
  flex: 1;
  align-items: center;
  background-color: #35c8e677;
`;
