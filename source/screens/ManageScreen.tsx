import { View, Text } from "react-native";

import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";

import { Colors, globalStyles } from "../styles/GlobalStyle";
import Button from "../components/Button";
import Break from "../components/Break";

import { useAuth } from "../context/AuthProvider";

const ManageScreen = ({ navigation }) => {
  const auth = useAuth();

  const addSomeDataPress = async () => {
    const timestamp = serverTimestamp();
    const data = {
      uid: auth.currentUser.uid,
      message: "hello application user...."
    }

    const status = await setDoc(doc(db, "messages", data.uid), data);
    console.log(status);
  };

  return (
    <View style={globalStyles.container}>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit similique
        repudiandae esse ipsa non, ducimus id tempora exercitationem eius
        aliquam quam dolor, nulla hic debitis adipisci doloremque magni
        inventore? Porro, reprehenderit accusantium sint laudantium fugiat
        beatae optio alias accusamus deserunt adipisci voluptate, maiores quas
        praesentium architecto assumenda sunt quibusdam et?
      </Text>
      <Break />
      {auth.isOffline ? (
        <></>
      ) : (
        <Button
          title="Only for Authentic Users"
          onPress={() => {
            alert("You are Authentic!");
            addSomeDataPress();
          }}
          bgColor={Colors.RED}
        />
      )}
    </View>
  );
};

export default ManageScreen;
