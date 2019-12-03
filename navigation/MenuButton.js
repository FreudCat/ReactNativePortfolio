import React, {Component} from "react"; 
import { Icon } from 'react-native-elements';
import {StyleSheet} from "react-native"; 


//See DrawerNavigation.js for createdrawernav info
class MenuButton extends Component {
    render ()
    {
        return (
        <Icon  //this icon shows the hamburger menu indicated the name "menu" 
            name="menu" 
            size={24} 
            color="black"
            style={styles.MenuIcon}
            onPress={() =>this.props.navigation.toggleDrawer()}  //needs the onpress propsnavigation to toggle the drawer open and closed. This menu button icon is on the header of each page 
            />
        ); 
    }
}

const styles=StyleSheet.create({
    MenuIcon:
    {
        position: "absolute",
        zIndex: 9,  
        top: 40, 
        left: 20,
    }
});

export default MenuButton; 
// {navigationOptions: ({ navigation }) => ({
//     headerStyle: {
//         backgroundColor: "#59253A"
//     },
//     headerTintColor: "#fff",
//     headerTitleStyle: {
//         color: "white"
//     },
//     headerLeft: 
// })}