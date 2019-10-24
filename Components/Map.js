import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { Constants } from 'expo';
// You can import from local files
import AssetExample from './Button.js';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import { Ionicons as Icon } from '@expo/vector-icons';
import { DrawerNavigator, DrawerItems, Navigation } from 'react-navigation';
import { Toolbar } from 'react-native-material-ui';
export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    drawerLabel: 'Map',
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Toolbar
        navigation={this.props.navigation}
        leftElement="menu"
        onLeftElementPress={ () => this.props.navigation.toggleDrawer()}
        centerElement="Map"
        searchable={{
          autoFocus: true,
          placeholder: 'Rechercher',
        }}
        />
        <View style={styles.header}>
          <Text> 'MAP' </Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#FFF',
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    padding: 15,
    paddingTop: 22
  },
});
