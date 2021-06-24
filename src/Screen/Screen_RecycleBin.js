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

export default class Screen_RecycleBin extends Component {
    constructor() {
        super();
        this.state = {
            deletedCards: [],
        }
    }
    async componentDidMount(){
       // await AsyncStorage.removeItem('RecycleBin')
    }
    componentDidUpdate(){
        console.log(this.state.deletedCards)
    }

    async getRecycleBin() {
        try {
          const cardsBrought = await AsyncStorage.getItem('RecycleBin')
          let json = JSON.parse(cardsBrought);
          if( json === null) json = []
          console.log(json);
          this.setState({deletedCards: json})
        } catch (e) {
          console.log(e);
        }
      }
  
  
    async delete(idCard){
        let people = this.state.deletedCards.filter((item) => {
            return item.login.uuid !== idCard
          })
          this.setState({ deletedCards: people })
          let toJSON = JSON.stringify(people)
          await AsyncStorage.setItem("RecycleBin", toJSON)
       
    }
    
    renderItem = ({item}) => (
        <Cards DataShown={item} originaldate={item.dob.date} onDelete={this.delete.bind(this)} />
    )
       

    keyExtractor = (item, idx) => idx.toString()

    render() {
    
        return (

            <View style={styleFlatList.container}>
                <View style={styleHeader.container}>
                    <Text style={styleHeader.title}> Papelera </Text>
                </View>
                <TouchableOpacity style={styleViewCards.recuperarDatos} onPress={async () => await this.getRecycleBin()}>
                    <FontAwesome name="user" size={15} color="black" ><Text> Recuperar datos</Text></FontAwesome>
                </TouchableOpacity>
                <TouchableOpacity style={styleViewCards.ocultarDatos} onPress={() => this.setState({ deletedCards: [] })}>
                    <MaterialCommunityIcons name="account-cancel" size={15} color="black" > 
                        <Text> Ocultar datos importados</Text> 
                    </MaterialCommunityIcons>
                </TouchableOpacity>
                <FlatList
                style={styleFlatList.flatImport}
                data={this.state.deletedCards}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
                numColumns={2}
                />
            </View>
        )
    }
}