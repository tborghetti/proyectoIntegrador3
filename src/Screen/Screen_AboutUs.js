import React, { Component } from 'react';
import {
    Text, 
    View,
} from 'react-native';
import {styleFlatList} from '../../style';

export default class Screen_AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <View style={styleFlatList.container}>
                <Text style={{color: "white", fontWeight: "bold"}}>Somos: Jose, Tizi y Ari :)</Text>
            </View>
        )
    }
}