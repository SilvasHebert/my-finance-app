import React from "react";

import { Container, Header, Title, Body, Balance } from "./styles";

export default function BalanceBox(): JSX.Element {
  return (
    <Container>
      <Header>
        <Title>Saldo Total</Title>
      </Header>
      <Body>
        <Balance>R$ 2.923,44</Balance>
      </Body>
    </Container>
  );
}
