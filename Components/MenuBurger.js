import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Toolbar, COLOR } from 'react-native-material-ui';

class MenuBurger extends Component  {
  render() {
    return(
      <View>
        <Toolbar
          leftElement="menu"
          centerElement="Searchable"
          style={{
            container: { backgroundColor: 'grey' },
            leftElement: { color: 'black' },
            titleText: { color: 'white' },
            rightElement: { color: 'white' },
          }}
          searchable={{
            autoFocus: true,
            placeholder: 'Search',
          }}
          onRightElementPress={ (label) => { console.log(label) }}
        />
      </View>
    )
  }
}
export default MenuBurger
