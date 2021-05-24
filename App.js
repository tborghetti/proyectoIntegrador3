import React, {Component} from 'react';
import CardsContainer from './src/Components/CardsContainer';
import {styleApp} from "./style";
import { 
  Text, 
  View 
} from 'react-native';

export default class App extends Component {
  constructor(){
    super();
      this.state = {
        
      }
  }
  
  render(){
    return (
      <View style={styleApp.container}>
        <Text>Hola Tiziana, la vamos a romper toda! :)</Text> 
      </View>
    );
  }
}



