import React from 'react';
import { Text, View, StyleSheet, StatusBar, TouchableOpacity, Image, AppRegistry, InlineImage, SafeAreaView, ScrollView } from 'react-native';
import { Constants } from 'expo';
import Map from '../Components/Map.js';
import { Card } from 'react-native-paper';
import { createStackNavigator, DrawerNavigator, DrawerItems, Navigation } from 'react-navigation';
import { Toolbar, COLOR } from 'react-native-material-ui';


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonSearchPress: false,
      buttonLeftPressColor: "white",
      inputColorSearch: "white",
      wifi: false,
      pmr: false,
      wc: false,
      resto: false,
      eglise: false
    };
  }

  _activeWifi() {
    this.setState({wifi: !this.state.wifi});
    this.props.navigation.navigate('Map', {
      wifi: !this.state.wifi,
      pmr: this.state.pmr,
      wc: this.state.wc,
      resto: this.state.resto,
      eglise: this.state.eglise
    })
  }
  _activePmr() {
    this.setState({pmr: !this.state.pmr});
    this.props.navigation.navigate('Map', {
      wifi: this.state.wifi,
      pmr: !this.state.pmr,
      wc: this.state.wc,
      resto: this.state.resto,
      eglise: this.state.eglise
    })
  }
  _activeWc() {
    this.setState({wc: !this.state.wc});
    this.props.navigation.navigate('Map', {
      wifi: this.state.wifi,
      pmr: this.state.pmr,
      wc: !this.state.wc,
      resto: this.state.resto,
      eglise: this.state.eglise
    })
  }
  _activeResto() {
    this.setState({resto: !this.state.resto});
    this.props.navigation.navigate('Map', {
      wifi: this.state.wifi,
      pmr: this.state.pmr,
      wc: this.state.wc,
      resto: !this.state.resto,
      eglise: this.state.eglise
    })
  }
  _activeEglise() {
    this.setState({eglise: !this.state.eglise});
    this.props.navigation.navigate('Map', {
      wifi: this.state.wifi,
      pmr: this.state.pmr,
      wc: this.state.wc,
      resto: this.state.resto,
      eglise: !this.state.eglise
    })
  }

  static navigationOptions = {
    drawerLabel: 'Home',
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
          <Toolbar
            leftElement="map"
            onLeftElementPress={ () => {this.props.navigation.navigate('Map', {
              wifi: this.state.wifi,
              pmr: this.state.pmr,
              wc: this.state.wc,
              resto: this.state.resto,
              eglise: this.state.eglise
            })}}
            centerElement="NeversNow"
            style={{
                container: { backgroundColor: '#302743' ,height: 80 },
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
        <ScrollView>
          <TouchableOpacity style={styles.containerImg} onPress={() => this.props.navigation.navigate('Map', {
            wifi: this.state.wifi,
            pmr: this.state.pmr,
            wc: this.state.wc,
            resto: this.state.resto,
            eglise: this.state.eglise
          })}>
            <Image
              style={styles.imageMap}
              source={require('../assets/icons/map800.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.header} onPress={() => this._activePmr()}>
            <Image
              style={styles.image}
              source={require('../assets/icons/handiaccess.png')}
            />
            <Text style={styles.text}>
               Place de parking PMR
             </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.header} onPress={() => this._activeWc()}>
            <Image
              style={styles.image}
              source={require('../assets/icons/toilettes.png')}
            />
             <Text style={styles.text}>
               Toilettes
             </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.header} onPress={() => this._activeWifi()}>
            <Image
              style={styles.image}
              source={require('../assets/icons/wifi.png')}
            />
             <Text style={styles.text}>
               WIFI publics
             </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.header} onPress={() => this._activeResto()}>
            <Image
              style={styles.image}
              source={require('../assets/icons/restaurant.png')}
            />
             <Text style={styles.text}>
               Restaurants
             </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.header} onPress={() => this._activeEglise()}>
            <Image
              style={styles.image}
              source={require('../assets/icons/monument.png')}
            />
             <Text style={styles.text}>
               Églises et Cathédrales
             </Text>
          </TouchableOpacity>
        </ScrollView>
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
  header: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: "#f9f9f9"
  },
  image: {
    width: 55,
    height: 55,
    margin: 5,
    marginRight: 15
  },
  text: {
    fontSize: 22,
  },
  imageMap: {
    marginTop: 10,
    width: '100%',
    resizeMode: 'cover',
    height: 140
  },
});
