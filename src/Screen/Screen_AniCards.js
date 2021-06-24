import React, { Component } from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Text,
  View,
  Animated,
  Touchable,
  TextInput,
  Image,
  TouchableWithoutFeedback
} from 'react-native';

import {Tarjetas} from '../Components/Tarjetas';


export default class Screen_AniCards extends Component{

 
    render() {
        const valores= Array.from({length: 10}, (v,i) => i);
        const tarjetas = valores.map((item,id) => <Tarjetas key={id} value={id} />)

        return(
            <View style={{
                flex:1, 
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>
                {tarjetas}

                
            </View> 
        )
    }
}