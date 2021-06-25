import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CardsViewImport from '../Components/CardsViewImport';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput
} from 'react-native';
import { styleFlatList, styleViewCards, styleHeader } from '../../style';
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
      if (json === null) json = [];
      let number = json.length;
      this.setState({ importedCards: json, length: number });
     // console.log(cardsBrought)
    } catch (e) {
      console.log(e);
    }
  }

  async delete(idCard) {
    try {
      let person = this.state.importedCards.filter((item) => {
        return item.login.uuid !== idCard
      })
      let personBorrada = this.state.importedCards.filter((item) => {
        return item.login.uuid === idCard
      })
      this.setState({ importedCards: person })
      let toJSON = JSON.stringify(person)
      await AsyncStorage.setItem("Selected", toJSON)
      let storage = await AsyncStorage.getItem('RecycleBin');
      storage = JSON.parse(storage);
      if (storage === null) storage = [];
      storage = [...storage, ...personBorrada];
      const jsonValue = JSON.stringify(storage)
      await AsyncStorage.setItem('RecycleBin', jsonValue);
    } catch (e) {
      console.log(e);
    }
  }
  
  filterCards(filter){
    let searchInput = filter.toUpperCase() ;
      let lookUp = this.state.importedCards.filter((search)=>{
        let fname = search.name.first.toUpperCase()
        let flastname = search.name.last.toUpperCase()
        let fcity = search.location.city.toUpperCase()
        let fcountry = search.location.country.toUpperCase()

      return fname.startsWith(searchInput) || flastname.startsWith(searchInput) ||  fcity.startsWith(searchInput) ||  fcountry.startsWith(searchInput) //buscar si incluye el numero y pasar todo a string y poner con el metodo include()
      })
      this.setState({importedCards: lookUp})
  }
  
  
  renderItem = ({ item }) => (
    <CardsViewImport DataShown={item} originaldate={item.dob.date} onDelete={this.delete.bind(this)} />
  )


  keyExtractor = (item, idx) => idx.toString()

  render() {
    return (
      <View style={styleViewCards.container}>
        <View style={styleHeader.container}>
          <Text style={styleHeader.title}> Tarjetas Importadas </Text>
        </View>
        
       

        <View>
        <TextInput 
          style = {styleViewCards.filter}
          placeholder='FILTER'
          onChangeText={filter => this.filterCards(filter)}
          keyboardType="default"
          
        />
        </View>

        <Text style={styleViewCards.cantidad}> Cantidad de tarjetas importadas: {this.state.length} </Text>
        <TouchableOpacity style={styleViewCards.recuperarDatos} onPress={this.getData.bind(this)}>
          <FontAwesome name="user" size={15} color="black"><Text> Recuperar datos</Text></FontAwesome>
        </TouchableOpacity>
        <TouchableOpacity style={styleViewCards.ocultarDatos} onPress={() => this.setState({ importedCards: [] })}>
          <MaterialCommunityIcons name="account-cancel" size={15} color="black" >
            <Text> Ocultar datos importados</Text>
          </MaterialCommunityIcons>
        </TouchableOpacity>
        
        <FlatList
          style={styleFlatList.flatImport}
          data={this.state.importedCards}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          numColumns={2}
        />

        <TouchableOpacity
          style={styleViewCards.papelera}
          onPress={() => this.props.navigation.navigate('Recycle Bin')}>
          <FontAwesome name="recycle" size={20} color="black" ><Text style={{ fontWeight: "bold" }}> Papelera</Text> </FontAwesome>
        </TouchableOpacity>
      </View>
    )
  }
}



