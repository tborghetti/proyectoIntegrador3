import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Cards from '../Components/Cards';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native';
import {styleFlatList, styleViewCards, styleHeader } from '../../style';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class Screen_ViewImportCards extends Component {
  constructor() {
    super();
    this.state = {
      importedCards: []
    }
  }

  async getData() {
    try {
      const cardsBrought = await AsyncStorage.getItem('Selected');
      let json = JSON.parse(cardsBrought);
      if(json === null) json = [];
      this.setState({ importedCards: json });
      console.log(cardsBrought)
    } catch (e) {
      console.log(e);
    }
  }
  
  delete(idCard){
    console.log(idCard);
   //guardar bajo la key 'papelera' y sacar de selected
  }
  
  renderItem = ({ item }) => (
    <Cards DataShown={item} originaldate={item.dob.date} onDelete={this.delete.bind(this)} />
  )


  keyExtractor = (item, idx) => idx.toString()

  render() {
    return (
      <View style={styleViewCards.container}>
        <View style={styleHeader.container}>
            <Text style={styleHeader.title}>Mostramos los valores importados</Text>
        </View>
        
        <TouchableOpacity style={styleViewCards.recuperarDatos} onPress={this.getData.bind(this)}>
          <FontAwesome name="user" size={15} color="black" ><Text> Recuperar datos</Text></FontAwesome>
        </TouchableOpacity>
        <TouchableOpacity style={styleViewCards.ocultarDatos} onPress={() => this.setState({ importedCards: [] })}>
          <MaterialCommunityIcons name="account-cancel" size={15} color="black" > 
            <Text>Ocultar datos importados</Text> 
          </MaterialCommunityIcons>
        </TouchableOpacity>
        <FlatList
          style={styleFlatList.indicator}
          data={this.state.importedCards}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          numColumns={2}
        />
      
      </View>
    )
  } 
}



