import React, { Component } from "react"; 
import {View, Text, Platform} from "react-native"; 


class BetaCalculator extends Component 
{
	

    static navigationOptions = {
        title: 'Beta Calculator'
    };

	render()
	{
		
		return(
			<View><Text>BetaCalculator</Text>
			</View>
			); 
	}
}

export default BetaCalculator; 