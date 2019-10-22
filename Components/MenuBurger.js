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
          searchable={{
            autoFocus: true,
            placeholder: 'Search',
          }}
          onRightElementPress={ (label) => { console.log(label) }}
          style={{
              container: { backgroundColor: COLOR.orange300 },
              leftElement: { color: COLOR.orange900 },
              titleText: { color: 'white' },
              rightElement: { color: COLOR.orange900 },
          }}
        />
      </View>
    )
  }
}

export default MenuBurger
