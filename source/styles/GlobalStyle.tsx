import { StyleSheet } from "react-native";

// https://flatuicolors.com/palette/defo
export enum Colors {
  BLUE = "#3498db",
  GREEN = "#1abc9c",
  YELLOW = "#f39c12",
  GRAY = "#7f8c8d",
  WHITE = "#fff",
  BLACK = "#000"
}

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },
});
