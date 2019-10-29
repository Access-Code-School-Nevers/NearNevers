import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, TouchableOpacity, Dimensions } from 'react-native';
import { Constants } from 'expo';
// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import { Ionicons as Icon } from '@expo/vector-icons';
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
      location : null,
      region: null,
      errorMessage: null,
    };
  }
  static navigationOptions = {
    drawerLabel: 'Map',
  };

  componentWillMount() {
    this._getLocationAsync();
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

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="white" barStyle="light-content" />
        <Toolbar
        navigation={this.props.navigation}
        leftElement="menu"

        onLeftElementPress={ () => {this.props.navigation.toggleDrawer()}}
        centerElement="NeversNow"
        style={{
            container: { backgroundColor: '#302743' },
            leftElement: { color: this.state.buttonLeftPressColor },
            titleText: { color: 'white' },
            rightElement: { color: 'white' }
          }}
        searchable={{
          autoFocus: true,
          placeholder: 'Rechercher',
          onSearchClosed: () => {if (this.state.buttonSearchPress == true){
            this.setState({
              buttonLeftPressColor: "white",
              buttonSearchPress: false,
            });
            }},
          onSearchPressed: () => {if(this.state.buttonSearchPress == false){
            this.setState({
              buttonSearchPress: true,
              buttonLeftPressColor: "#302743"
            });
          }
        }
      }
        }

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
