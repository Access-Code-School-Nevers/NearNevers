import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';
import Map from './Components/Map'
import Home1 from './Home/Home';
import Nav from './navigation/Navigation.js';
import { AppLoading } from 'react';
import { Card } from 'react-native-paper';
import { createStackNavigator, createDrawerNavigator, DrawerItems, Navigation } from 'react-navigation';
import * as Font from 'expo-font';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Nav />
    );
  }


  componentDidMount() {
   Font.loadAsync({
     'open-sans-bold': require('./assets/fonts/Roboto.ttf'),
   });
 }

}



const styles = StyleSheet.create({
	innerContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
	header: { padding: 15, paddingTop: 22 },

});
