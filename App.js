import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Screen_01 from "./screens/Screen_01";
import CategoryDetailScreen from "./screens/CategoryDetailScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Screen_01}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CategoryDetail"
          component={CategoryDetailScreen}
          options={{ title: "Category Detail" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
