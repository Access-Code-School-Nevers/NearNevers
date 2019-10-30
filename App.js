import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';
import Map from './Components/Map'
import Home1 from './Home/Home';
import Nav from './navigation/Navigation.js';
import { AppLoading } from 'react';
import { Card } from 'react-native-paper';
import * as Font from "expo-font";
import { ActivityIndicator } from "react-native";
import { createStackNavigator, createDrawerNavigator, DrawerItems, Navigation } from 'react-navigation';



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("./assets/fonts/Roboto.ttf"),
      Roboto_medium: require("./assets/fonts/Roboto-Medium.ttf"),
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <ActivityIndicator />;
    }
    return (
      <Nav />
    );
  }


}



const styles = StyleSheet.create({
	innerContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
	header: { padding: 15, paddingTop: 22 },

});
