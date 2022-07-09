import { FC } from "react";
import { TextInput, StyleSheet } from "react-native";

interface TextFieldParams {
  text: string,
  setText: (text: string) => void,
  isSecret?: boolean
};

type TextFieldFn = FC<TextFieldParams>;
const TextField: TextFieldFn = ({text, setText, isSecret}) => {
  return (
    <TextInput
      style={styles.textInput}
      value={text}
      onChangeText={setText}
      secureTextEntry={isSecret}
    />
  );
};

export default TextField;

const styles = StyleSheet.create({
  textInput: {
    padding: 5,
    backgroundColor: "#fefefe",
    borderRadius: 5,
  },
});
