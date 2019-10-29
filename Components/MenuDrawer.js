import React from 'react';
import {
  View,
  Text,
  Platform,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export default class MenuDrawer extends React.Component {
  navLink(nav, text) {
    return(
      <TouchableOpacity>
        <Text style={styles.link}>{text}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>MenuDrawer</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'wheat',
  }
})
