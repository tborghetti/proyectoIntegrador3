import React, { Component } from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Text,
  View,
  Touchable,
  TextInput
} from 'react-native';
import { styleFlatList, styleHeader } from '../../style';
import Cards from '../Components/Cards';


export default class Screen_FlatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoCards: [],
      activity: true,
      numberOfCards: [], 
    }
  }

  // componentDidMount() {
  //   fetch('https://randomuser.me/api/?results=0')
  //     .then((result) => result.json())
  //     .then((data) => {
  //       this.setState({ infoCards: data.results, activity: false })
  //     })
  // }

  delete(idCard) {
    console.log(idCard);
    let person = this.state.infoCards.filter((item) => {
      return item.login.uuid !== idCard
    })
    this.setState({ infoCards: person })
  }

  renderItem = ({ item }) => (
    <Cards DataShown={item} originaldate={item.dob.date} onDelete={this.delete.bind(this)} />
  )

  keyExtractor = (item, idx) => idx.toString()

  addCard(numero){
     fetch('https://randomuser.me/api/?results='+ numero) 
     .then((result) => result.json())
     .then((data) => { 
       let info = data.results.concat(this.state.infoCards); //concat:metodo que permite unir dos arrays en uno - guardar eso en una var - pusios primero el data.results para que 
       this.setState({infoCards: info, activity:false})
     })
    console.log("hello")
   }


  render() {
    return (
      <View style={styleFlatList.container}>

        <View style={styleHeader.container}>
          <Text style={styleHeader.title}>Header</Text>
          <TouchableOpacity
          style = {{backgroundColor: "pink"}}
          onPress={() => this.props.navigation.navigate('Screen_AboutUs')}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>Ir a About Us</Text>
           </TouchableOpacity>
        </View>
        <View style={styleFlatList.ActivityIndicator}>
          {
            this.state.activity &&
            <ActivityIndicator
              size='large'
              color='orange' />
          }
        </View>


        <View>
        <TextInput 
          style={styleFlatList.inputText}
          placeholder='ADD CARD'
          onChangeText={numero => this.addCard(numero)}
          keyboardType="number-pad"
          // queremos poner un boton tipo enter. ???
        />
        </View>


        <FlatList
          data={this.state.infoCards}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          numColumns={2}
        />

        <TouchableOpacity
          style={styleFlatList.button}
          onPress={() => this.props.navigation.navigate('Screen_ViewImportCards')}
        >
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>Importar Tarjetas</Text>
        </TouchableOpacity>

      </View>
    )
  }

}
