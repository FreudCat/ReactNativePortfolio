import React from "react"; 
import {View, Text} from "react-native"; 
import { Icon } from 'react-native-elements';
import HomeScreen from "../components/HomescreenComponent"; 
import {createAppContainer} from "react-navigation"; 
import {createDrawerNavigator} from "react-navigation-drawer"; 
import InfoScreen from "../components/InfoScreen"; 
import Calculators from "../components/Calculators"; 

const DrawerNavigator=createDrawerNavigator({
    Home: HomeScreen, 
    Information: InfoScreen,   
    Calculators: Calculators
});  // these are the links in the drawer title:location

//https://www.youtube.com/watch?v=vZJo8PlW8xE   <-------- Watch this to style the drawer menu 

export default createAppContainer(DrawerNavigator); //React native 3 needs an app container at it's exported at its, especially for navigation 