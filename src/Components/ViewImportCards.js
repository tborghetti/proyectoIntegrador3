import React, { Component } from 'react';
import {styleViewImportCards} from '../../style';
import {
    Text, View, Touchable,
} from 'react-native';
export default class ViewImportCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <View style={styleViewImportCards.ViewCard}>
                <Image ></Image>
                <Text style={styleViewImportCards.NameLastName}>Nombre: , Apellido: </Text>
                <Text style={styleViewImportCards.Mail}>Mail: </Text>
                <Text style={styleViewImportCards.Birthday}>Fecha de nacimiento: - (edad)</Text> 
            </View>
        )
    }
}