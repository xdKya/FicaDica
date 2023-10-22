import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./bottomTab";
import Ler_Dicas from "../screens/ler_dica";

const Tab = createStackNavigator();

export default class StackNavigator extends Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="dicas" component={BottomTabNavigator} />
        <Tab.Screen name="ler_dicas" component={Ler_Dicas} />
      </Tab.Navigator>
    );
  }
}
