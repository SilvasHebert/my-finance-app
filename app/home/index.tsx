import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import BalanceBox from "../../src/components/BalanceBox";
import LastTransactions from "../../src/components/LastTransactions";

export default function App() {
  return (
    <View style={styles.container}>
      <Link href="/index">Go to Index</Link>
      <BalanceBox />
      <LastTransactions />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
});
