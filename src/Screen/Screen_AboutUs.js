import React, { Component } from 'react';
import {
    Text, 
    TouchableOpacity, 
    View,
    Animated,
    Touchable
} from 'react-native';
import {styleAboutUs} from '../../style';

export default class Screen_AboutUs extends Component{
    constructor(props) {
        super(props);
        this.state = {
            toValue: 1
        }
    }

    position = new Animated.Value(0);
    rotation = new Animated.Value(0);

    topDown = () => {
        Animated.parallel([
            Animated.timing(this.position, {
                toValue: 100,
                duration: 500,
                useNativeDriver: true
            }),
        ]).start();
    }

    render(){
        return(
            <View style={styleAboutUs.container}>
                    <View style={styleAboutUs.aboutUs}>
                        <Text style={styleAboutUs.title}> Sobre Nosotros </Text>
                    </View>
                    <Text style={styleAboutUs.texto}> Somos: Josefina D'Alessandro, Tiziana Borghetti y Ariel Farji :) {'\n'}
                        Nos conocimos en programación 1 y venimos haciendo los proyectos juntos desde ese entones </Text>
                
                <Animated.View style={{
                    width: '87%',
                    height: 170,
                    backfaceVisibility: 'false',
                    justifyContent: 'center',
                    borderWidth: 3,
                    borderColor: 'orange',
                    alignItems: 'center',           
                    transform: [
                        {translateY: this.position},
                    ]
                }}> 
                    <Text style={styleAboutUs.animatedTexto}> En esta aplicación los usuarios podrán seleccionar la cantidad de tarjetas deseadas, importarlas y ver detalles sobre cada una de ellas. En el caso que no quieran visualizar una tarjeta la podrán eliminar 
                        y en caso que se arrepientan podrán recuperarla en la papelera de reciclaje.
                        Además, dentro de las tarjetas importadas encontraran un filtro para mejorar la búsqueda. 
                    </Text>
              
                </Animated.View>
                
               
                <TouchableOpacity style={styleAboutUs.button} onPress={this.topDown}>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}> Ordenar Texto</Text>
                </TouchableOpacity>

            </View>
           
        )
    }
}