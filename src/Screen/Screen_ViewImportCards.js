import React, {Component} from 'react';
import { styleImportCards } from "./style";
import { 
  Text, 
  View 
} from 'react-native';

export default class Screen_ViewImportCards extends Component {
  constructor(){
    super();
      this.state = {
        
      }
  }
  
  render(){
    return (
        <View style={styleImportCards.container}>
        
        </View>
    );
  }
}