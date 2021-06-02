import React, { Component } from 'react';
import {styleCards} from '../../style';
import {
    Text, 
    View,
} from 'react-native';

export default class MoreDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <View style={styleCards.ViewCard}>
                    <Text style={styleCards.NameLastName}> {this.props.DataShown.location.street.name}, {this.props.DataShown.location.street.number} </Text>
                    <Text style={styleCards.NameLastName}> {this.props.DataShown.location.city}, {this.props.DataShown.location.state}</Text>
                    <Text style={styleCards.Mail}>{this.props.DataShown.country}</Text>
                    <Text style={styleCards.Mail}>{this.props.DataShown.location.postcode}</Text>
                    <Text style={styleCards.Mail}>{this.props.DataShown.registered.date}</Text>
                    <Text style={styleCards.Mail}>{this.props.DataShown.phone}</Text>   
            </View>
        )
    }
}

