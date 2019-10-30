import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, TouchableOpacity, Dimensions } from 'react-native';
import { Constants } from 'expo';
// You can import from local file
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import { DrawerNavigator, DrawerItems, Navigation } from 'react-navigation';
import { Toolbar } from 'react-native-material-ui';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions'

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonSearchPress: false,
      buttonLeftPressColor: "white",
      inputColorSearch: "white",
      location : null,
      region: null,
      errorMessage: null,
      wifi: []
    };
  }
  static navigationOptions = {
    drawerLabel: 'Map',
  };

  _getWifi() {
    return fetch('https://thomasg.promo-29.codeur.online/apiNeversNow/public/getWifi', { headers: { "app": "neversNow" }})
      .then((response) => { return response.json() })
      .then((responseJson) => { this.setState({wifi: responseJson}) })
      .catch((error) => { console.error(error) });
  }

  componentWillMount() {
    this._getLocationAsync();
    if (this.props.navigation.state.params.wifi && this.state.wifi.length == 0) this._getWifi(); else if (!this.props.navigation.state.params.wifi && this.state.wifi.length != 0) this.setState({wifi: []});
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});

    const { latitude, longitude } = location.coords;

    const region = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    }

    this.setState({ location });
  };

  componentDidUpdate(){
    if (this.props.navigation.state.params.wifi && this.state.wifi.length == 0) this._getWifi(); else if (!this.props.navigation.state.params.wifi && this.state.wifi.length != 0) this.setState({wifi: []});
  }

  render() {

    {/*
      Appeller _getWifi si this.props.navigation.state.params.wifi = true
      Sinon vider le tableau wifi: this.setState({wifi: []})
    */}

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="white" barStyle="light-content"/>
        <Toolbar
          navigation={this.props.navigation}
          leftElement="menu"
          onLeftElementPress={ () => {this.props.navigation.toggleDrawer()}}
          centerElement="NeversNow"
          style={{
              container: { backgroundColor: '#302743' },
              leftElement: { color: this.state.buttonLeftPressColor },
              titleText: { color: this.state.inputColorSearch },
              rightElement: { color: 'white' },
              padding: 0
          }}
          searchable={{
            color: "black",
            autoFocus: true,
            placeholder: 'Rechercher',
            onSearchClosed: () => {if (this.state.buttonSearchPress == true){
              this.setState({
                buttonLeftPressColor: "white",
                buttonSearchPress: false,
                inputColorSearch: "white"
              });
            }},
            onSearchPressed: () => {if(this.state.buttonSearchPress == false){
              this.setState({
                buttonSearchPress: true,
                buttonLeftPressColor: "lightgrey",
                inputColorSearch: "#302743"
              });
            }}
          }}
        />
        <View style={styles.header}>
          <MapView
            style={styles.mapStyle}
            showsUserLocation
            initialRegion={{
              latitude: 46.9896,
              longitude: 3.159,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
          { this.state.wifi.map(marker => { return <MapView.Marker coordinate={{latitude: Number(marker.longitude), longitude: Number(marker.latitude)}} title={marker.rue} key={marker.id}/> }) }
          </MapView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'white',
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    padding: 0,
    paddingTop: 0
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
