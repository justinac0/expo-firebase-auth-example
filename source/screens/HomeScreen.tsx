import { Button, Text } from "react-native";
import { useAuth } from "../context/AuthProvider";

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
    <>
      <Button title="Sign Out" onPress={onSignOutPress} />
      <Text>Current User: {auth.currentUser.email}</Text>
    </>
  );
};

export default HomeScreen;
