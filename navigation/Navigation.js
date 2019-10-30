import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';
import Map from '../Components/Map'
import Home from '../Home/Home';

import { Navigation, createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Dimensions } from 'react-native'
import MenuDrawer from '../Components/MenuDrawer'

const WIDTH = Dimensions.get('window').width;


const DrawerConfig = {
  drawerWidth: WIDTH*0.7,
  contentComponent: ({ navigation }) => {
    return(<MenuDrawer navigation={navigation}/>)
  }
}

const Nav = createDrawerNavigator({
  Home: {
    screen: Home,
  },
    Map: {
      screen: Map
    },
},
DrawerConfig
);

 export default createAppContainer(Nav);
