import { View, Text } from "react-native";

import Button from "../components/Button";
import Break from "../components/Break";

import { useAuth } from "../context/AuthProvider";
import { globalStyles } from "../styles/GlobalStyle";

const HomeScreen = ({ navigation }) => {
  const auth = useAuth();

  const onSignOutPress = async () => {
    try {
      await auth.signOut();
      navigation.navigate("login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={globalStyles.container}>
      <Button title="Sign Out" onPress={onSignOutPress} />
      <Break />
      <Text>Current User: {auth.currentUser.email}</Text>
    </View>
  );
};

export default HomeScreen;
