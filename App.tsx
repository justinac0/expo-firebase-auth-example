import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import { AuthProvider, useAuth } from "./source/context/AuthProvider";

import HomeScreen from "./source/screens/HomeScreen";
import AuthScreen from "./source/screens/AuthScreen";

const App = () => {
  return (
    <AuthProvider>
      <StatusBar />
      <Screens />
      <Text style={{
        padding: 15,
      }}>"How do the things work? The don't.." - some engineer</Text>
    </AuthProvider>
  );
};

const Stack = createNativeStackNavigator();

const Screens = () => {
  const auth = useAuth();
  // if loading return nothing...

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {auth.currentUser ? (
          <>
            <Stack.Screen
              name="home"
              component={HomeScreen}
              options={{
                headerRight: () => undefined,
              }}
            />
          </>
        ) : (
          <Stack.Screen
            name="login"
            component={AuthScreen}
            options={{
              headerShown: false,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
