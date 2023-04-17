import React from "react";
import { Text } from "react-native";

import { Container } from "./styles";

export default function Transaction({ data }: any): JSX.Element {
  return (
    <Container>
      <Text>{data.name}</Text>
    </Container>
  );
}
