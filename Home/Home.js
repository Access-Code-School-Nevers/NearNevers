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
      wc: false
    };
  }

  _activeWifi() {
    this.setState({wifi: !this.state.wifi});
    this.props.navigation.navigate('Map', {
      wifi: !this.state.wifi,
      pmr: this.state.pmr,
      wc: this.state.wc
    })
  }
  _activePmr() {
    this.setState({pmr: !this.state.pmr});
    this.props.navigation.navigate('Map', {
      wifi: this.state.wifi,
      pmr: !this.state.pmr,
      wc: this.state.wc
    })
  }
  _activeWc() {
    this.setState({wc: !this.state.wc});
    this.props.navigation.navigate('Map', {
      wifi: this.state.wifi,
      pmr: this.state.pmr,
      wc: !this.state.wc
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
              wc: this.state.wc
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
          <TouchableOpacity style={styles.containerImg} onPress={() => this.props.navigation.navigate('Map', {wifi: this.state.wifi, pmr: this.state.pmr, wc: this.state.wc})}>
            <Image
              style={styles.imageMap}
              source={require('../assets/icons/map2.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.header} onPress={() => this._activePmr()}>
            <Image
              style={styles.image}
              source={require('../assets/icons/handiaccess.png')}
            />
            <Text style={styles.text}>
               Places Parking PMR
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
               Points d'accès WIFI publics
             </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.header}>
            <Image
              style={styles.image}
              source={require('../assets/icons/banc.png')}
            />
             <Text style={styles.text}>
               Banc publics
             </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.header}>
            <Image
              style={styles.image}
              source={require('../assets/icons/promenade.png')}
            />
             <Text style={styles.text}>
               Promenades
             </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.header}>
            <Image
              style={styles.image}
              source={require('../assets/icons/corbeille.png')}
            />
             <Text style={styles.text}>
               Corbeilles
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
    height: 60
  },
});
