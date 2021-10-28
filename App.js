import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppContextProvider } from "./app/Context";

import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import NewsStack from "./app/navigation/mainNav";
import Article from "./app/screens/Article";

import { LogoTitle } from "./app/components/LogoTitle";

const Stack = createStackNavigator();
export default function App() {
  let [fontsLoaded] = useFonts({
    "Inter-Black": require("./assets/fonts/Inter-Black.otf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <AppContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#1C1C1E",
              },
              headerTitleStyle: {
                fontWeight: "bold",
                fontFamily: "Inter-Black",
                textTransform: "uppercase",
                fontSize: 20,
                color: "#F2F2F7",
              },
              headerBackTitleVisible: false,
              headerTintColor: "#F2F2F7",
            }}
          >
            <Stack.Screen
              name="News"
              component={NewsStack}
              options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
            />
            <Stack.Screen
              name="Article"
              component={Article}
              options={({ route }) => ({ title: route.params.source })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </AppContextProvider>
    );
  }
}
