import React from 'react';
import {
  View,
  Text,
  Platform,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export default class MenuDrawer extends React.Component {
  navLink(nav, text) {
    return(
      <TouchableOpacity style={{height: 50}} onPress={() => {this.props.navigation.navigate(nav)}}>
        <Text style={styles.link}>{text}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.statusBar}></View>
        <View style={styles.topLinks}>
          <View style={styles.headerDrawer}>
            <View style={styles.imgView}>
              <Image style={styles.img} source={require('../assets/icons/logo_white.png')} />
            </View>
          </View>
        </View>
        <View style={styles.bottomLinks}>
          {this.navLink('Home', 'Home')}
          {this.navLink('Map', 'Map')}
          {this.navLink('Paramètres', 'Paramètres')}
        </View>
        <View style={styles.footer}>
          <Text style={styles.description}>NeversNow</Text>
          <Text style={styles.version}>v0.5</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  statusBar: {
    height: 24
  },
  container: {
    flex:1,
    backgroundColor: 'grey',
  },
  topLinks: {
    height: 120,
    backgroundColor: '#302743'
  },
  headerDrawer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#777777',
  },
  imgView: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomLinks: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 450,
  },
  footer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: 'lightgrey'
  },
  link: {
    flex: 1,
    fontSize: 20,
    padding: 7,
    paddingLeft: 14,
    margin: 5,
    textAlign: 'left'
  },
  version: {
    flex: 1,
    textAlign: 'right',
    marginRight: 20,
    color: 'grey'
  },
  description: {
    flex: 1,
    marginLeft: 20,
    fontSize: 16,
  }
})
