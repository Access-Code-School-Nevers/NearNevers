import React, {Component} from 'react';
import { StyleSheet, Text, } from 'react-native';
import { Menu } from 'react-burger-menu'

class LeftElement extends React.Component {
  render () {
    return (
      <Menu>
        <Text>Home</Text>
        <Text>About</Text>
        <Text>Contact</Text>
        <Text>Settings</Text>
      </Menu>
    );
  }
}

export default LeftElement
