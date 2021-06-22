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
      importedCards: [],
      length: 0,
    }
  }

  async getData() {
    try {
      const cardsBrought = await AsyncStorage.getItem('Selected');
      let json = JSON.parse(cardsBrought);
      if(json === null) json = [];
      let number= json.length;
      this.setState({ importedCards: json , length: number});
      console.log(cardsBrought)
    } catch (e) {
      console.log(e);
    }
  }
  
  async delete(idCard){
   let person = this.state.importedCards.filter((item)=>{
    return item.login.uuid !== idCard
  })
  let personBorrada = this.state.importedCards.filter((item)=>{
    return item.login.uuid === idCard
  })
  this.setState({importedCards:person})
  let toJSON = JSON.stringify(person)
  await AsyncStorage.setItem("Selected", toJSON)
  let storage = await AsyncStorage.getItem('RecycleBin');
        storage = JSON.parse(storage);
        if(storage === null) storage = [];
        storage.push(personBorrada);
        const jsonValue = JSON.stringify(storage)		
        await AsyncStorage.setItem('RecycleBin', jsonValue);
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
        <Text> Cantidad de tarjetas importadas: {this.state.length} </Text>
        <TouchableOpacity style={styleViewCards.recuperarDatos} onPress={this.getData.bind(this)}>
          <FontAwesome name="user" size={15} color="black" ><Text> Recuperar datos</Text></FontAwesome>
        </TouchableOpacity>
        <TouchableOpacity style={styleViewCards.ocultarDatos} onPress={() => this.setState({ importedCards: [] })}>
          <MaterialCommunityIcons name="account-cancel" size={15} color="black" > 
            <Text> Ocultar datos importados</Text> 
          </MaterialCommunityIcons>
        </TouchableOpacity>
        <TouchableOpacity
          style = {styleViewCards.papelera}
          onPress={() => this.props.navigation.navigate('Screen_RecycleBin')}>
          <FontAwesome name="recycle" size={15} color="black" ><Text> Papelera</Text> 
          </FontAwesome>
          
           </TouchableOpacity>
        <FlatList
          style={styleFlatList.flatImport}
          data={this.state.importedCards}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          numColumns={2}
        />
      
      </View>
    )
  } 
}



