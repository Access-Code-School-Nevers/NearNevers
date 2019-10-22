import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MenuBurger from '../Components/MenuBurger'
import { Toolbar } from 'react-native-material-ui';

export default function App() {
  return (
    <View style={styles.container}>
      <MenuBurger/> 
      <Text>test4</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
