import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';
import Map from '../Components/Map'
import Home from '../Home/Home';
import { Navigation, createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Dimensions } from 'react-native'

const Nav = createDrawerNavigator({
  Home: {
    screen: Home,
  },
    Map: {
      screen: Map
    },
});

 export default createAppContainer(Nav);
