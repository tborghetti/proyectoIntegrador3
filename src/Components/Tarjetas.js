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




export class Tarjetas extends Component{
    constructor(props) {
        super(props);
        this.state = {
            // ArraySelectedCards: [],
            // showModal: false,
            // showComments: false,
            // texto:[],
            // commentHandler: '',
            // showAddComments: true,
            toValue: 1
        }
    }

    position = new Animated.Value(0);
    rotation = new Animated.Value(0);

    topDown = () => {
        Animated.parallel([
            // Animated.timing(this.position, {
            //     toValue: 100,
            //     duration: 1000,
            //     useNativeDriver: true
            // }),
            Animated.timing(this.rotation, {
                toValue: this.state.toValue,
                duration: 500,
                useNativeDriver: true
            })
        ]).start();
    this.setState({toValue: this.state.toValue + 1})
    }

    render(){

        const rotA = this.rotation.interpolate({
            inputRange: [0,1],
            outputRange: ['0deg', '180deg']
        })

        const rotB = this.rotation.interpolate({
            inputRange: [0,1],
            outputRange: ['180deg', '0deg']
        })

        return(
            <View>

                <Animated.View style={{
                    width: 60,
                    height: 100,
                    backgroundColor: 'blue',
                   backfaceVisibility: 'true',
                    borderRadius: 10,
                    borderWidth: 2,
                    transform: [
                        {translateY: this.position},
                        {rotateX: rotA}
                    ]
                }}>
                </Animated.View>

                <Animated.View style={{
                    width: 100,
                    height: 100,
                    backgroundColor: 'red',
                    backfaceVisibility: 'false',
                    position: 'absolute',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    borderWidth: 2,
                    transform: [
                        {translateY: this.position},
                        {rotateX: rotB}  
                    ]
                }}><TouchableOpacity style={{flex:1}} onPress={this.topDown}>
                    <Text> {this.props.value} </Text>
                </TouchableOpacity> <View>
                            <Text>hola</Text>
                            <Text>hola</Text>
                            <Text>hola</Text>
                            <Text>hola</Text>
                            <Text>hola</Text>
                        
                    </View>
                </Animated.View>
                
                {/* <TouchableOpacity style={styleCards.MoreInfo}>
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
         */}

            </View>
           
        )
    }
}