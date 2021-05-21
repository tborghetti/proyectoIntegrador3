import React, {Component} from 'react';
import CardsContainer from './components/CardsContainer';
import {style} from "./style";
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
      <View style={style.container}>
        <CardsContainer />
        <Text>Hola Tiziana, la vamos a romper toda! :)</Text> 
      </View>
    );
  }
}



