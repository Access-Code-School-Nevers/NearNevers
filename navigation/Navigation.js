import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';
import Map from '../Components/Map'
import Home1 from '../Home/Home';
// You can import from local files
import AssetExample from '../Components/Button';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import { Ionicons as Icon } from '@expo/vector-icons';
import { DrawerItems, Navigation } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer} from 'react-navigation';

const Nav = createDrawerNavigator({
  Home: {
    screen: Home1
  },
  Map: {
    screen: Map
  },
 });

 export default createAppContainer(Nav);
