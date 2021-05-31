import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Cards from '../Components/Cards';
import {styleImportCards} from '../../style';
// import MoreDetails from '../Components/MoreDetails'
import {
    Text, 
    TouchableOpacity, 
    View,
} from 'react-native';

export default class Screen_ImportCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            infoCards: []
        }
    }

    componentDidMount(){
        fetch('https://randomuser.me/api/?results=3')
        .then((result) => result.json())
        .then((data) => { 
          this.setState({infoCards: data.results})
        })
      }
      async storeData(){
        try {
            const jsonCards = JSON.stringify(this.state.infoCards);	
            await AsyncStorage.setItem('Cards', jsonCards);
            console.log("Datos almacenados");
        }catch(e){
            console.log(e)
        }
    }

    render() {
        return (
            <View style={styleImportCards.container}>
                <Text>ImportCards</Text>
                {this.state.infoCards.map( (oneCard, idx) => {
                        return (
                            <Cards DataShown={oneCard} key={idx} id={oneCard.id} originaldate={oneCard.dob.date} />
                        )
                        })
                }
                <TouchableOpacity style={{backgroundColor:'red'}} onPress= {this.storeData.bind(this)}>
                <View>
                    <Text>Guardar datos</Text>
                </View>
                </TouchableOpacity>
            </View>
        )
    }
}