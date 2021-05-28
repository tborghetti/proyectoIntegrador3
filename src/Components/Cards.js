import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styleCards} from '../../style';
import {
    Text, 
    View,
} from 'react-native';

export default class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount(){
        let apiDate = this.props.originaldate;
        let timestamp = new Date(apiDate).getTime(); //Date es una funcion que viene de React
        let day = new Date(timestamp).getDate();
        let month = new Date(timestamp).getMonth() + 1;
        let year = new Date(timestamp).getFullYear();
        let beautifulDate = day + '/' + month + '/' + year 
         this.setState({beautifulDate: beautifulDate})
      }

    render() {
        return (
            <View style={styleCards.ViewCard}>
                    <Text style={styleCards.NameLastName}> {this.props.DataShown.name.last}, {this.props.DataShown.name.first} </Text>
                    <Text style={styleCards.Mail}>{this.props.DataShown.email}</Text>
                    <Text style={styleCards.Birthday}> {this.state.beautifulDate} - ({this.props.DataShown.dob.age})</Text> 
            </View>
        )
    }
}