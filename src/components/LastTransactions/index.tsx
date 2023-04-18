import React from "react";

import Transaction from "./Transaction";
import { FlatList, Title } from "./styles";
import BottomSheet from "../BottomSheet";

const transactionData = [
  {
    name: "Uber",
    value: 34.22,
  },
  {
    name: "Supermercados BH",
    value: 24.22,
  },
];

export default function LastTransactions() {
  return (
    <BottomSheet>
      <FlatList
        ListHeaderComponent={<Title>Últimas transações</Title>}
        data={transactionData}
        renderItem={({ item }) => <Transaction data={item} />}
      />
    </BottomSheet>
  );
}
