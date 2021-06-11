import React, {Component} from 'react';
import {styleApp} from "./style";
import { 
  Text, 
  View
} from 'react-native';
import Screen_ViewImportCards from './src/Screen/Screen_ViewImportCards';
import Screen_FlatList from './src/Screen/Screen_FlatList';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator(); 

export default class App extends Component {
  constructor(){
    super();
      this.state = {
        
      }
  }
  
  render(){
    return (
      <NavigationContainer>
				<Stack.Navigator> 
					<Stack.Screen name='Screen_FlatList' component={Screen_FlatList} />
					<Stack.Screen name='Screen_ViewImportCards' component={Screen_ViewImportCards} />
				</Stack.Navigator>
			</NavigationContainer>
    
    );
  }
}
