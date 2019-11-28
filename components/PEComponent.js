import React, { Component } from "react"; 
import {View, Text} from "react-native"; 
import BetaCalculator from "./BetaComponent";

class PECalculator extends Component 
{
	

	static navigationOptions = {
        title: 'PE Calculator'
    };

	render()
	{
		return(
			<View><Text>P/Calculator</Text></View>); 
	}
}

export default PECalculator; 