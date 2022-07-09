import { StyleSheet } from "react-native";

// https://flatuicolors.com/palette/defo
export enum Colors {
  BLUE = "#3498db",
  GREEN = "#1abc9c",
  WHITE = "#fff",
}

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },
});
