import React, {Component} from 'react';

import Screen_ViewImportCards from './src/Screen/Screen_ViewImportCards';
import Screen_FlatList from './src/Screen/Screen_FlatList';
import Screen_AboutUs from './src/Screen/Screen_AboutUs';
import Screen_RecycleBin from './src/Screen/Screen_RecycleBin';
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
					<Stack.Screen name='Home' component={Screen_FlatList} options={{
          title: '',
          headerStyle: {
            backgroundColor: '#363636',
          },
          headerTintColor: '#242323',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
					<Stack.Screen name='Imported Cards' component={Screen_ViewImportCards} />
          <Stack.Screen name='About Us' component={Screen_AboutUs} />
          <Stack.Screen name='Recycle Bin' component={Screen_RecycleBin} />
				</Stack.Navigator>
			</NavigationContainer>
    
    );
  }
}
