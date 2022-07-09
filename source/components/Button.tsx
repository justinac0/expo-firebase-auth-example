import { FC } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Colors } from "../styles/GlobalStyle";

const Button = ({
  title = "Button",
  onPress = () => {},
  bgColor = Colors.GREEN,
  fgColor = Colors.WHITE,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: bgColor,
        },
      ]}
    >
      <Text
        style={[
          styles.buttonText,
          {
            color: fgColor,
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});