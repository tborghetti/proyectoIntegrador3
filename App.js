import React, {Component} from 'react';
import {styleApp} from "./style";
import { 
  Text, 
  View 
} from 'react-native';
import Screen_ImportCards from './src/Screen/Screen_ImportCards';
import Screen_FlatList from './src/Screen/Screen_FlatList'

export default class App extends Component {
  constructor(){
    super();
      this.state = {
        
      }
  }
  
  render(){
    return (
      <View style={styleApp.container}>
      <Screen_ImportCards />
      </View>
    );
  }
}



