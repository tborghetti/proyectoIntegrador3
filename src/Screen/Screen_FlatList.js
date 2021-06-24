import React, { Component } from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Text,
  View,
  Touchable,
  TextInput,
  Image
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
   }


  render() {
    return (
      <View style={styleFlatList.container}>

        <View style={styleHeader.container}>
          <Text style={styleHeader.title}>ENCONTRANDO A TU MEDIA NARANJA</Text>
          {/* <Image style={{ height: 100, width: 100, borderRadius: 50, alignSelf: 'center' }} source={require('')} /> */}
        </View>

        <View>
        <TouchableOpacity
          style = {styleFlatList.aboutUs}
          onPress={() => this.props.navigation.navigate('About Us')}>
          <Text style={{ fontSize: 15, fontWeight: "bold"}}>About Us</Text>
        </TouchableOpacity>
      
        <TextInput 
          style={styleFlatList.inputText}
          placeholder='How many card do you want to add? Insert number'
          onChangeText={numero => this.addCard(numero)}
          keyboardType="number-pad"
        />
        </View>

        <View style={styleFlatList.ActivityIndicator}>
          {
            this.state.activity &&
            <ActivityIndicator
              size='large'
              color='orange' />
          }
        </View>


        <FlatList
          data={this.state.infoCards}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          numColumns={2}
        />

        <TouchableOpacity
          style={styleFlatList.button}
          onPress={() => this.props.navigation.navigate('Imported Cards')}
        >
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>Importar Tarjetas</Text>
        </TouchableOpacity>

      </View>
    )
  }

}
