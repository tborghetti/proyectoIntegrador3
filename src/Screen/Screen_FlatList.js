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
import {styleFlatList, styleHeader } from '../../style';
import Cards from '../Components/Cards';


export default class Screen_FlatList extends Component {
  constructor() {
    super();
    this.state = {
      infoCards: [],
      activity: true
    }
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=3')
      .then((result) => result.json())
      .then((data) => {
        this.setState({ infoCards: data.results, activity: false })
      })
  }

  renderItem = ({ item }) => (
    <Cards DataShown={item} originaldate={item.dob.date} />
  )


  keyExtractor = (item, idx) => idx.toString()

  render() {
    return (
      <View style={styleFlatList.container}>

        <View style={styleHeader.container}>
          <Text style={styleHeader.title}>Header</Text>
        </View>
        {
          this.state.activity &&
          <ActivityIndicator
            size='large'
            color='orange' />
        }

        <FlatList
          style={styleFlatList.indicator}
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
