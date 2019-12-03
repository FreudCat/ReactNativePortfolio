import React, { Component } from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import PEinfo from "../components/PEinfo";
import BETAinfo from "../components/BetaComponent";
import { createStackNavigator, HeaderTitle } from "react-navigation-stack";
import { Icon } from 'react-native-elements';


const InfoTabNav = createBottomTabNavigator({ //creates a tab nav bar at the bottom of the page
    PEinfo,
    BETAinfo   //navigates between these two PEinfo and Betainfo components, this navigator exported into infostack nav below 
}
// , {
//     navigationOptions: ({ navigation }) => {
//         const { routeName } = navigation.state.routes[navigation.state.index];
//         //the line above takes the name of the page that we are on and gives it to routeName
//         return {
//             headerTitle: routeName  //this places the name that was given in routeName and places it in the title
//         };
//     }
// }
);

// const InfoStackNav = createStackNavigator({
//     InfoTabNav: InfoTabNav
// },
// {
//     defaultNavigationOptions: ({ navigation }) => {  //creates the hamburger menu and allows it to open when pressed. 
//         return {
//             headerLeft: ( 
//                 <Icon
//                     style={{ paddingLeft: 10 }}
//                     onPress={() => navigation.toggleDrawer()}
//                     name="menu"
//                     size={30}
//                 />
//             )
//         };
//     }
// }
  //};Using infostackNav so that there is a header at the top of the screen. We can just import infotabnav without putting it into intostacknav, but we would lose the header 


//https://www.youtube.com/watch?v=w24FE9PZpzk    see this page for combining navigators 
export default InfoTabNav; //this is exported to the DRAWERNAVIGATOR component 