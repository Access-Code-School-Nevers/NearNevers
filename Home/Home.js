import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MenuBurger from '../Components/MenuBurger'

export default function App() {
  return (
    <View style={styles.container}>
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