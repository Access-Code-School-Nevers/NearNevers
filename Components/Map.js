import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, TouchableOpacity, Dimensions, Platform } from 'react-native';
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
      wifi: [],
      pmr: [],
      wc: [],
      resto: [],
      eglise: []
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
  _getPmr() {
    return fetch('https://thomasg.promo-29.codeur.online/apiNeversNow/public/getPmr', { headers: { "app": "neversNow" }})
      .then((response) => { return response.json() })
      .then((responseJson) => { this.setState({pmr: responseJson}) })
      .catch((error) => { console.error(error) });
  }
  _getWc() {
    return fetch('https://thomasg.promo-29.codeur.online/apiNeversNow/public/getWc', { headers: { "app": "neversNow" }})
      .then((response) => { return response.json() })
      .then((responseJson) => { this.setState({wc: responseJson}) })
      .catch((error) => { console.error(error) });
  }
  _getResto() {
    return fetch('https://thomasg.promo-29.codeur.online/apiNeversNow/public/getResto', { headers: { "app": "neversNow" }})
      .then((response) => { return response.json() })
      .then((responseJson) => { this.setState({resto: responseJson}) })
      .catch((error) => { console.error(error) });
  }
  _getEglise() {
    return fetch('https://thomasg.promo-29.codeur.online/apiNeversNow/public/getEglise', { headers: { "app": "neversNow" }})
      .then((response) => { return response.json() })
      .then((responseJson) => { this.setState({eglise: responseJson}) })
      .catch((error) => { console.error(error) });
  }

  componentWillMount() {
    this._getLocationAsync();

    if (this.props.navigation.state.params.wifi && this.state.wifi.length == 0) this._getWifi(); else if (!this.props.navigation.state.params.wifi && this.state.wifi.length != 0) this.setState({wifi: []});

    if (this.props.navigation.state.params.pmr && this.state.pmr.length == 0) this._getPmr(); else if (!this.props.navigation.state.params.pmr && this.state.pmr.length != 0) this.setState({pmr: []});

    if (this.props.navigation.state.params.wc && this.state.wc.length == 0) this._getWc(); else if (!this.props.navigation.state.params.wc && this.state.wc.length != 0) this.setState({wc: []});

    if (this.props.navigation.state.params.resto && this.state.resto.length == 0) this._getResto(); else if (!this.props.navigation.state.params.resto && this.state.resto.length != 0) this.setState({resto: []});

    if (this.props.navigation.state.params.eglise && this.state.eglise.length == 0) this._getEglise(); else if (!this.props.navigation.state.params.eglise && this.state.eglise.length != 0) this.setState({eglise: []});
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

    if (this.props.navigation.state.params.pmr && this.state.pmr.length == 0) this._getPmr(); else if (!this.props.navigation.state.params.pmr && this.state.pmr.length != 0) this.setState({pmr: []});

    if (this.props.navigation.state.params.wc && this.state.wc.length == 0) this._getWc(); else if (!this.props.navigation.state.params.wc && this.state.wc.length != 0) this.setState({wc: []});

    if (this.props.navigation.state.params.resto && this.state.resto.length == 0) this._getResto(); else if (!this.props.navigation.state.params.resto && this.state.resto.length != 0) this.setState({resto: []});

    if (this.props.navigation.state.params.eglise && this.state.eglise.length == 0) this._getEglise(); else if (!this.props.navigation.state.params.eglise && this.state.eglise.length != 0) this.setState({eglise: []});
  }

  render() {
    return (
      <View style={styles.container}>
      {Platform.OS === 'ios' &&  <View style={{height: 16, backgroundColor: '#302743'}} />}
         <Toolbar
          navigation={this.props.navigation}
          leftElement="home"
          onLeftElementPress={ () => {this.props.navigation.navigate('Home')}}
          centerElement="Map"
          style={{
            container: { backgroundColor: '#302743', height: 80},
            leftElement: { color: this.state.buttonLeftPressColor },
            titleText: { color: this.state.inputColorSearch },
            rightElement: { color: 'white'}
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
              longitudeDelta: 0.0421
            }}
          >

          { this.state.pmr.map(marker => { return <MapView.Marker coordinate={{latitude: Number(marker.longitude), longitude: Number(marker.latitude)}} title='PMR' key={marker.id} pinColor={'#00aacd'}/> }) }

          { this.state.wc.map(marker => { return <MapView.Marker coordinate={{latitude: Number(marker.longitude), longitude: Number(marker.latitude)}} title={marker.rue} key={marker.id} pinColor={'#ef5a27'}/> }) }

          { this.state.wifi.map(marker => { return <MapView.Marker coordinate={{latitude: Number(marker.longitude), longitude: Number(marker.latitude)}} title={marker.rue} key={marker.id} pinColor={'#5d328f'}/> }) }

          { this.state.resto.map(marker => { return <MapView.Marker coordinate={{latitude: Number(marker.latitude), longitude: Number(marker.longitude)}} title={marker.nom} key={marker.id} pinColor={'#ad54a0'}/> }) }

          { this.state.eglise.map(marker => { return <MapView.Marker coordinate={{latitude: Number(marker.latitude), longitude: Number(marker.longitude)}} title={marker.nom} key={marker.id} pinColor={'#73bf46'}/> }) }
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
  }
});
