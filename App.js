import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import PrincipalStackNavigator from "./navegation/principalStack";

export default function App() {
  return (
    <View style={{ backgroundColor: "#AEAEAE", flex: 1 }}>
      <NavigationContainer>
        <PrincipalStackNavigator />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
