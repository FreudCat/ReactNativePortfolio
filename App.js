import React from 'react';
import AppNavigator from "./components/HomescreenComponent"; 
import { View, Platform, Text } from "react-native";  //platform for navigation
import { createAppContainer } from 'react-navigation';
import DrawerStackNav from "./navigation/DrawerNavigator"; 

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <DrawerStackNav />;//in Readt-native 3, needs to have app container in the root for navigation, the final export is from DrawerNavigator.js 
  }
}

