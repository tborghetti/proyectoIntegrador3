import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styleCards,styleModal} from '../../style';

// import MoreDetails from './MoreDetails'
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    Modal
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AntDesign } from '@expo/vector-icons';


export default class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ArraySelectedCards: [],
            showModal: false
        }
    }
    async componentDidMount() {
        let apiDate = this.props.originaldate;
        let timestamp = new Date(apiDate).getTime(); //Date es una funcion que viene de React
        let day = new Date(timestamp).getDate();
        let month = new Date(timestamp).getMonth() + 1;
        let year = new Date(timestamp).getFullYear();
        let beautifulDate = day + '/' + month + '/' + year
        this.setState({ beautifulDate: beautifulDate })
    }

    async selectedCardStorage(item) {
        try {
            let info = this.state.ArraySelectedCards.concat(item);
            this.setState({ArraySelectedCards: info})
            const cardValue = JSON.stringify(this.state.ArraySelectedCards);
            await AsyncStorage.setItem('Selected', cardValue)
            console.log("Card seleccionada");
        } catch (error) {
            console.log(error)
        }
    }



    // SelectedCards = (item) => {
    //     let info = this.state.ArraySelectedCards.concat("item")
    //     this.setState({ArraySelectedCards: info})
    // }


    render() {
        return (
            <View style={styleCards.ViewCard}>
            
                <TouchableOpacity style={styleCards.Select}
                    onPress={this.selectedCardStorage.bind(this)}
                >
                    <AntDesign name="checkcircleo" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styleCards.Close}
                    // onPress={this.delete.bind(this,this.props.id)}
                >
                    <AntDesign name="closecircleo" size={24} color="white" />
                </TouchableOpacity>
                <Image style={{ height: 100, width: 100, borderRadius: 50, alignSelf: 'center' }} source={{ uri: this.props.DataShown.picture.medium }} />
                <Text style={styleCards.NameLastName}> {this.props.DataShown.name.last}, {this.props.DataShown.name.first} </Text>
                <Text style={styleCards.Mail}>{this.props.DataShown.email}</Text>
                <Text style={styleCards.Birthday}> {this.state.beautifulDate} - ({this.props.DataShown.dob.age})</Text>
                <TouchableOpacity style={styleCards.MoreInfo}>
                    <AntDesign name="plus" color="black" onPress={()=> this.setState({showModal:true})}> <Text> More info </Text></AntDesign>
                </TouchableOpacity>
                <Modal visible ={this.state.showModal} 
                transparent='true'
                animationType='slide'
                >
                <View style={styleModal.container}>
                    <View style={styleModal.modal}>
                    <TouchableOpacity style={styleModal.close}
                    onPress={()=> this.setState({showModal:false})}
                >
                    <AntDesign name="closecircleo" size={24} color="black" />
                </TouchableOpacity>
                <Image style={{ height: 150, width: 150, borderRadius: 50, alignSelf: 'center' }} source={{ uri: this.props.DataShown.picture.large }} />
                <Text style={styleModal.text}>{this.props.DataShown.location.street.name} {this.props.DataShown.location.street.number}</Text>
                <Text style={styleModal.text}>{this.props.DataShown.location.city}, {this.props.DataShown.location.state}</Text>
                <Text style={styleModal.text}>{this.props.DataShown.location.country}</Text>
                <Text style={styleModal.text}>{this.props.DataShown.location.postcode}</Text>
                <Text style={styleModal.text}>{this.props.DataShown.dob.registered}</Text>
                <Text style={styleModal.text}>{this.props.DataShown.dob.phone}</Text>
                
                    </View>
                </View>
                </Modal>
            </View>
        )
    }
}