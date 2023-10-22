import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dicas from "../screens/dicas";
import Nova_Dica from "../screens/nova_dica";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="dicas" component={Dicas} />
        <Tab.Screen name="nova_dicas" component={Nova_Dica} />
      </Tab.Navigator>
    );
  }
}
