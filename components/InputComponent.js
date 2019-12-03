import React, { Component } from "react"; 
import {View, Text} from "react-native"; 


class Input extends Component 
{
	
    static navigationOptions = {
        title: 'Input Values'
    };

	render()
	{
		return(
			<View>
				<Text style={{margin:10}}>Input your values: </Text>
				<Text>Input Current Market Value: </Text>
				<Text>Be able to add user selected stock and chart metrics over time?: </Text>
				<Text>Have real-time stock sticker for SandP: AND Dow Jones </Text>
				<Text>Input your values: </Text>
				<Text>Input your values: </Text>
			</View>
		); 
	}
}

export default Input; 