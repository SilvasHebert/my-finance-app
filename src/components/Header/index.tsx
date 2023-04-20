import React from "react";

import BalanceBox from "../BalanceBox";
import { Container } from "./styles";

export default function Header() {
  return (
    <Container
      colors={["#2cf2a5", "#00d4ff"]}
      start={{ x: 0.1, y: 0.2 }}
      end={{ x: 0.9, y: 0.9 }}
    >
      <BalanceBox />
    </Container>
  );
}
