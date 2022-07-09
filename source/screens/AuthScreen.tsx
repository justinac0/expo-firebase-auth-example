import { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import TextField from "../components/TextField";
import Break from "../components/Break";

import { useAuth } from "../context/AuthProvider";
import { LoginResult, RegisterResult } from "../lib/firebase_helper";

const AuthScreen = ({navigation}) => {
  const auth = useAuth();
  
  const [email, setEmail] = useState("example@gmail.com");
  const [password, setPassword] = useState("123456");

  const OnLoginPress = async () => {
    const status: LoginResult = await auth.signInWithEmailAndPassword(email, password);
    if (status == LoginResult.SUCCESS) {
      console.log("Success!");
    } else {
      console.log("Login Failed!");
    }
  };

  const OnRegisterPress = async () => {
    const status: RegisterResult = await auth.registerWithEmailAndPassword(email, password);
    if (status == RegisterResult.SUCCESS) {
      console.log("Register Success!");
    }
  };

  return (
    <View style={[styles.container, styles.centerAll]}>
      <Text style={styles.title}>AppName</Text>
      <Break />
      <Break />
      <Break />
      <Break />
      <Break />
      <TextField text={email} setText={setEmail} />
      <Break />
      <TextField text={password} setText={setPassword} isSecret={true} />
      <Break />
      <Break />
      <Button title="Login" onPress={OnLoginPress} />
      <Break />
      <Button title="Register" onPress={OnRegisterPress} />
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 48,
  },
  container: {
    flex: 1,
    padding: 32
  },
  textInput: {
    padding: 5,
    backgroundColor: "#fefefe",
    borderRadius: 5,
  },
  centerAll: {
      justifyContent: "center",
  }
});
