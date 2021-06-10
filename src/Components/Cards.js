import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styleCards} from '../../style';
// import MoreDetails from './MoreDetails'
import {
    Text, 
    View,
    Image,
    TouchableOpacity,
    Button
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AntDesign } from '@expo/vector-icons'; 


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
      
    async selectedCardStorage(){
        try{
            const cardValue = JSON.stringify(this.props.DataShown);
            await AsyncStorage.setItem('Selected', cardValue)
            console.log('se almaceno');
        } catch(error){
            console.log(error)
        }
    }
    
      render() {
        return (
            <View style={styleCards.ViewCard}>
                    <TouchableOpacity style={styleCards.Select}
                    onPress= {this.selectedCardStorage.bind(this)}
                    >
                        <AntDesign name="checkcircleo" size={24} color="white" />   
                    </TouchableOpacity>
                    <Image style={{height:100, width:100, borderRadius:50, alignSelf:'center'}} source={{uri:this.props.DataShown.picture.medium}}/>
                    <Text style={styleCards.NameLastName}> {this.props.DataShown.name.last}, {this.props.DataShown.name.first} </Text>
                    <Text style={styleCards.Mail}>{this.props.DataShown.email}</Text>
                    <Text style={styleCards.Birthday}> {this.state.beautifulDate} - ({this.props.DataShown.dob.age})</Text> 
                    <TouchableOpacity style = {styleCards.MoreInfo}>
                            <AntDesign name="plus" color="black"> <Text> More info </Text></AntDesign>
                    </TouchableOpacity> 
                        
            </View>
        )
    }
}