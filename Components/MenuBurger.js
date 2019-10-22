import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Toolbar } from 'react-native-material-ui';

export default function App() {
  return (
    <View style={styles.container}>
    <Toolbar
      leftElement="menu"
      centerElement="Searchable"
      searchable={{
        autoFocus: true,
        placeholder: 'Search',
      }}
      rightElement={{
          menu: {
              icon: "more-vert",
              labels: ["item 1", "item 2"]
          }
      }}
      onRightElementPress={ (label) => { console.log(label) }}
    />
      <Text>test5</Text>
    </View>
  );
}

const styles = StyleSheet.create({
});
