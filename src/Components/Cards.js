import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styleCards,styleModal, styleModalComments} from '../../style';
import { FontAwesome } from '@expo/vector-icons';

// import MoreDetails from './MoreDetails'
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    Modal,
    TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AntDesign } from '@expo/vector-icons';


export default class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ArraySelectedCards: [],
            showModal: false,
            showComments: false,
            texto:[],
            commentHandler: ''
        }
    }
    async componentDidUpdate(){
      //  await this.getComments()
    }

    async componentDidMount() {
        await AsyncStorage.removeItem('Comments');
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
            let storage = await AsyncStorage.getItem('Selected');
            storage = JSON.parse(storage);
            if(storage === null) storage = [];
            console.log(storage);
            let data = storage.find(function(ele) {
                return ele.login.uuid === item.login.uuid;
            });
            if (!data){ 
                storage.push(this.props.DataShown);
            const cardValue = JSON.stringify(storage);
            await AsyncStorage.setItem('Selected', cardValue)
                }
            
            
        } catch (error) {
            console.log(error)
        }
    }

 
    async setComments(){
        try {
            let storage = await AsyncStorage.getItem('Comments');
            storage = JSON.parse(storage);
            if(storage === null) storage = [];
            console.log(storage);
            storage.push(this.state.commentHandler);
            const jsonValue = JSON.stringify(storage)		
            await AsyncStorage.setItem('Comments', jsonValue);
            console.log('se almaceno: ' + jsonValue);
        }catch(e){
            console.log(e);
        }
        
    }
    
    async getComments(){
        try{
            const theComments = await AsyncStorage.getItem('Comments');
            if(theComments !== null){
                const jsonParsed= JSON.parse(theComments);
                this.setState({texto: jsonParsed})
            }else{
                console.log('No se encontraron datos')
            }
        }catch(e){
            console.log(e);
        }
    }

    

    render() {
        return (
            <View style={styleCards.Card}>
            
                <TouchableOpacity style={styleCards.Select}
                    onPress={this.selectedCardStorage.bind(this)}>
                    <AntDesign name="checkcircleo" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styleCards.Close}
                   onPress={()=>this.props.onDelete(this.props.DataShown.login.uuid)}>
                    <AntDesign name="closecircleo" size={24} color="white" />
                </TouchableOpacity>
                <Image style={{ height: 100, width: 100, borderRadius: 50, alignSelf: 'center' }} source={{ uri: this.props.DataShown.picture.medium }} />
                <Text style={styleCards.NameLastName}> {this.props.DataShown.name.last}, {this.props.DataShown.name.first} </Text>
                <Text style={styleCards.Mail}>{this.props.DataShown.email}</Text>
                <Text style={styleCards.Birthday}> {this.state.beautifulDate} - ({this.props.DataShown.dob.age})</Text>
        {/* more info */}        
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
                            onPress={()=> this.setState({showModal:false})} >
                                <AntDesign name="closecircleo" size={24} color="#ff7100" />
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
        {/* add comments */}
                <TouchableOpacity style={styleCards.Comments}>
                    <FontAwesome name="comments" color="black" size={12} onPress={()=> this.setState({showComments:true})}><Text> Add Comments</Text></FontAwesome>
                </TouchableOpacity>
                <Modal visible ={this.state.showComments} 
                transparent='true'
                animationType='slide'
                >
                    <View style={styleModalComments.container}>
                        <View style={styleModalComments.modal}>
                            <TouchableOpacity style={styleModal.close}
                            onPress={()=> this.setState({showComments:false})} >
                                <AntDesign name="closecircleo" size={24} color="#ff7100" />
                            </TouchableOpacity>
                            <Text style={styleModalComments.textTitle}> Comentarios Anteriores: </Text>
                            <Text style={styleModalComments.text}> {this.state.texto} </Text>
                            <TextInput style={styleModalComments.TextInput}
                            placeholder='ADD COMMENT'
                            onChangeText={texto => this.setState({commentHandler: texto})} 
                            onSubmitEditing={this.setComments.bind(this)}
                            ></TextInput>
                           
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}