import React, { Component } from 'react';

import Cards from '../Components/Cards';
import {styleImportCards} from '../../style';
import {
    Text, 
    TouchableOpacity, 
    View,
} from 'react-native';

export default class Screen_ImportCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            infoCards: []
        }
    }

    componentDidMount(){
        fetch('https://randomuser.me/api/?results=9')
        .then((result) => result.json())
        .then((data) => { 
          this.setState({infoCards: data.results})
        })
      }


    render() {
        return (
            <View style={styleImportCards.container}>
                <Text>ImportCards</Text>
                {this.state.infoCards.map( (oneCard, idx) => {
                        return (
                            <Cards DataShown={oneCard} key={idx} id={oneCard.id} originaldate={oneCard.dob.date} />
                        )
                        })
                    }
                <TouchableOpacity> Boton para guardar </TouchableOpacity>
            </View>
        )
    }
}