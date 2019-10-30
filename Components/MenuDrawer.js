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
          <View style={styles.links}>
            {this.navLink('Home', 'Accueil')}
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.description}>Nevers Now</Text>
          <Text style={styles.version}>v1.0</Text>
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
    height: 135,
    backgroundColor: '#302743'
  },
  headerDrawer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f3f3f3',
  },
  imgView: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 75,
    width: 75,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomLinks: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 450,
  },
  links: {
    borderBottomWidth: 1,
    borderColor: "#f3f3f3"
  },
  footer: {
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#444',
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
    color: '#eaeaea'
  },
  description: {
    flex: 1,
    marginLeft: 20,
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold'
  }
})
