import React, {Component} from "react" 
import MenuButton from "../navigation/MenuButton";
import {View, Text} from "react-native";  


class Calculators extends Component 
{
    render() 
    {
        return(
            <View style={{marginTop:50}}>
                <MenuButton navigation={this.props.navigation}/>
				<Text>CALCULATOrs</Text>
			</View>
        ); 
    }
}

export default Calculators; 