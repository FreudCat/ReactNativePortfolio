import React, { Component } from "react"; 
import PECalculator from "./PEComponent"; 
import BetaCalculator from "./BetaComponent"; 
import Input from "./InputComponent"; 
// import { createStackNavigator, createDrawerNavigator } from "react-navigation-stack"; 
import {View, Platform, Text} from "react-native";  //platform for navigation
import { createStackNavigator } from "react-navigation-stack"; 
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createMaterialTopTabNavigator} from "react-navigation-tabs";
import { createAppContainer } from 'react-navigation'; //appcontainer is new thing that you send to the App.js to be rendered to the mobile device 

class HomeScreen extends Component 
{
	render()
	{
		return (
			<View style={{flex:1, margin:10, alignItems:"center"}}>
				<Text>Home Screen</Text>
			</View>
		); 
	}
}

const TabNavigator=createMaterialTopTabNavigator({
	Home:HomeScreen, 
	PECalculator:PECalculator, 
	BetaCalculator:BetaCalculator},
	{
		tabBarPosition:"top"
	});


	const App = createStackNavigator({
		TabNavigator: {
		  screen: TabNavigator,
		  navigationOptions: {
			headerStyle: {
			  backgroundColor: '#633689',
			},
			headerTintColor: '#FFFFFF',
			title: 'TabExample',
		  },
		},
	  });

export default createAppContainer(App);