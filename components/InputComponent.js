import React, { Component } from "react"; 
import {View, Text} from "react-native"; 

class Input extends Component 
{
	

    static navigationOptions = {
        title: 'Input Values'
    };

	render()
	{
		return(<View><Text>Input your values: </Text></View>); 
	}
}

export default Input; 