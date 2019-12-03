import React, { Component } from "react";
import {View, Platform, Text} from "react-native";  //platform for navigation
import MenuButton from "../navigation/MenuButton"; 



//start here. See MenuButton and its component page for drawer navigation  
class HomeScreen extends Component {
	
	
	static navigationOptions={
        title:"Home" }; 
	
		render() {
		return (
			<View style={{ flex: 1, marginTop:50, alignItems: "center" }}>
				<MenuButton navigation={this.props.navigation}/>
					{/* this.props.navigation passes the navigation props to the menubutton component  */}
				<Text>Home Screen</Text>
			</View>
		);
	}
}

export default HomeScreen; 