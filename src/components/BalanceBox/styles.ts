import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.View`
  width: 100%;
  height: 130px;
  background-color: ${colors.white};
  flex-direction: column;
  border: 3px ${colors.black} solid;
  border-bottom-width: 7px;
  border-right-width: 7px;
  border-radius: 12px;
`;

export const Header = styled.View`
  padding: 5px 10px;
  border-bottom-width: 3px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const Body = styled.View`
  flex: 1;
  justify-content: center;
  padding: 10px;
`;

export const Balance = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
