import React from "react"; 
import {View, Text} from "react-native"; 
import { Icon } from 'react-native-elements';
import HomeScreen from "../components/HomescreenComponent"; 
import {createAppContainer} from "react-navigation"; 
import {createDrawerNavigator} from "react-navigation-drawer"; 
import InfoScreen from "../components/InfoScreen"; 
import Calculators from "../components/Calculators"; 
import InfoTabNav from "./TabNavigator"; 
import { createStackNavigator, HeaderTitle } from "react-navigation-stack";


const DrawerNavigator=createDrawerNavigator({
    Home: HomeScreen, 
    Information: InfoTabNav, //this is exported to the DRAWERNAVIGATOR component 
     //NOTE: the link to this page goes to the TabNAvigator.js that shows the bottom tab navigator and shows the initial screen as specified by the tab navigator 
    Calculators: Calculators
}, {
    navigationOptions: ({ navigation }) => {
        const { routeName } = navigation.state.routes[navigation.state.index];
        //the line above takes the name of the page that we are on and gives it to routeName
        return {
            headerTitle: routeName  //this places the name that was given in routeName and places it in the title
        };
    }
}
); // these are the links in the drawer title:location

const DrawerStackNav=createStackNavigator({
    DrawerNavigator:DrawerNavigator //place the drawer navigator into a stack navigator so that we can have a header, thus a place to put a title and a hamburger menu icon. Don't need the stack nav for the drawer and hamburger icon to work, but this just gives us a header container. This is what is exported to the app.js 
}, {
    defaultNavigationOptions: ({ navigation }) => {  //creates the hamburger menu and allows it to open when pressed. 
        return {
            headerLeft: ( 
                <Icon
                    style={{ paddingLeft: 10 }}
                    onPress={() => navigation.toggleDrawer()}
                    name="menu"
                    size={30}
                />
            )
        };
    }
}
);  //Using infostackNav so that there is a header at the top of the screen. We can just import infotabnav without putting it into intostacknav, but we would lose the header 


//https://www.youtube.com/watch?v=vZJo8PlW8xE   <-------- Watch this to style the drawer menu 
//https://www.youtube.com/watch?v=w24FE9PZpzk see this page for combining navigators  and even more complex combinations

export default createAppContainer(DrawerStackNav); //React native 3 needs an app container at is root that is exported, especially for navigation. This is exported to app.js 