import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import BalanceBox from "../src/components/BalanceBox";
import LastTransactions, {
  BottomSheetRefProps,
} from "../src/components/LastTransactions";

import { GestureHandlerRootView, ContainerSafeAreaView } from "./styles";
import { useCallback, useRef } from "react";
import { TouchableOpacity } from "react-native";

export default function App() {
  const ref = useRef<BottomSheetRefProps>(null);

  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive();

    if (isActive) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(-200);
    }
  }, []);

  return (
    <GestureHandlerRootView>
      <ContainerSafeAreaView>
        <ExpoStatusBar />
        <TouchableOpacity
          style={{ height: 10, width: 10, backgroundColor: "red" }}
          onPress={onPress}
        />
        <BalanceBox />
        <LastTransactions ref={ref} />
      </ContainerSafeAreaView>
    </GestureHandlerRootView>
  );
}
