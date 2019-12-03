import React, { Component } from "react"; 
import { createStackNavigator, createDrawerNavigator } from "react-navigation-stack"; 
import {View, Platform, Text} from "react-native";  //platform for navigation
import {createMaterialTopTabNavigator} from "react-navigation-tabs";
import { createAppContainer } from 'react-navigation'; //appcontainer is new thing that you send to the App.js to be rendered to the mobile device 
import MenuButton from "../navigation/MenuButton"; 

// const TabNavigator=createMaterialTopTabNavigator({ //creates a tab nav bar at the top 
// 	Home:Homescreen, 
// 	PECalculator:PECalculator, 
// 	BetaCalculator:BetaCalculator,
// 	Input:Input},
// 	{
// 		tabBarPosition:"top", 
// 		tabBarOptions: {
// 			activeTintColor: 'white',
// 			  inactiveTintColor: 'black',
// 			  style: {
// 				backgroundColor: '#00BCD4'
// 		}
// 	}});

class InfoScreen extends Component 
{
    constructor(props)
    {
        super(props); 
        this.state={}; 
    }

    static navigationOptions = {
        title: "info"}

        

    render ()
    {
        return (
			<View style={{marginTop:50}}>
                <MenuButton navigation={this.props.navigation}/>
				<Text>INfo Screen</Text>
               
			</View>
		);
    }
}

export default InfoScreen; 