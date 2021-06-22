import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Cards from '../Components/Cards';
import {
    Text, 
    View,
    TouchableOpacity,
    FlatList
} from 'react-native';
import {styleFlatList, styleViewCards } from '../../style';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class Screen_RecycleBin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deletedCards: [],
        }
    }
    async getData() {
        try {
          const cardsBrought = await AsyncStorage.getItem('RecycleBin');
          let json = JSON.parse(cardsBrought);
          if(json === null) json = [];
          this.setState({ deletedCards: json});
          console.log(cardsBrought)
        } catch (e) {
          console.log(e);
        }
      }
    
    delete(){
        console.log('hola');
    }
    
    renderItem = ({item}) => (
        <Cards DataShown={item} originaldate={item.dob.date} onDelete={this.delete.bind(this)} />
      )
    
    
    keyExtractor = (item, idx) => idx.toString()

    render() {
        return (
            <View style={styleFlatList.container}>
                <TouchableOpacity style={styleViewCards.recuperarDatos} onPress={this.getData()}>
                    <FontAwesome name="user" size={15} color="black" ><Text> Recuperar datos</Text></FontAwesome>
                </TouchableOpacity>
                <TouchableOpacity style={styleViewCards.ocultarDatos} onPress={() => this.setState({ deletedCards: [] })}>
                    <MaterialCommunityIcons name="account-cancel" size={15} color="black" > 
                        <Text> Ocultar datos importados</Text> 
                    </MaterialCommunityIcons>
                </TouchableOpacity>
                <FlatList
                data={this.state.deletedCards}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
                numColumns={2}
                />
            </View>
        )
    }
}