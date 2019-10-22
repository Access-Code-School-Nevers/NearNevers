import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MenuBurger from '../Components/MenuBurger'
import { Toolbar } from 'react-native-material-ui';

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <MenuBurger/>
        </View>
        <View style={styles.body}>
          <Text>test4</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: "100%",
  },
  header: {
    paddingTop: 24,
    backgroundColor: "white"
  },
  body: {
    backgroundColor: "white"
  }
});

export default Home
