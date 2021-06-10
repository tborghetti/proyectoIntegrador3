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
      const cardsBrought = await AsyncStorage.getItem('Selected');
       this.setState({importedCards: JSON.parse(cardsBrought)});
       console.log(cardsBrought)
    }catch(e){
      console.log(e);
      }
  }

  render() {
    return (
      <View style={styleImportCards.container}>
        <Text>Mostramos los valores importados</Text>
          {this.state.importedCards}
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



