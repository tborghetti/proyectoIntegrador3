import React, { Component } from 'react';
import { styleImportCards } from '../../style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Cards from '../Components/Cards';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class Screen_ViewImportCards extends Component {
  constructor() {
    super();
    this.state = {
      importedCards: []
    }
  }

  async getData() {
    try{
      const jsonValue = await AsyncStorage.getItem('Selected');
      if(jsonValue !== null){
      const jsonParsed = JSON.parse(jsonValue);
       this.setState({importedCards: jsonParsed});
      }else{
      console.log('No se encontro la key :( ');
      }
      } catch(e){
      console.log(error);
      }
  }

  render() {
    return (
      <View style={styleImportCards.container}>
        <Text>Mostramos los valores importados</Text>
        {this.state.importedCards.map( (oneCard, idx) => {
            return (
                    <Cards DataShown={oneCard} key={idx} id={oneCard.id} originaldate={oneCard.dob.date} />
            )
          })
        }
        <TouchableOpacity style={{ backgroundColor: 'red' }} onPress={this.getData.bind(this)}>
          <View>
            <Text>Recuperar datos</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: 'red' }} onPress={() => this.setState({ importedCards: [] })}>
          <View>
            <Text>Ocultar datos importados</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}



// ninguno de los dos esta funciondo para mostrar la tarjeta seleccionada:
//{this.state.importedCards.map( (oneCard, idx) => {
  //return (
  //    <Cards DataShown={oneCard} key={idx} id={oneCard.id} originaldate={oneCard.dob.date} />
 //  )
 //  })
// }

//{this.state.importedCards.map((oneCard, idx) => {
// return (
//    <Text>{oneCard.name.first}</Text>
//  )
//})
//}