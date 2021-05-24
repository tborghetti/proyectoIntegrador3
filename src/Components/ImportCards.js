import React, { Component } from 'react';
import {styleImportCards} from '../../style'
import {
    Text, View, Touchable,
} from 'react-native';
export default class ImportCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            infoCards: [],
            infoCardsOriginal:[]
        }
    }
    componentDidMount(){
        fetch('https://randomuser.me/api/?results=9')
        .then((result) => result.json())
        .then((data) => { 
          this.setState({infoCards: data.results, infoCardsOriginal:data.results})
        })
      }


    render() {
        return (
            <View style={styleImportCards.container}>
                <Text>Holi</Text>
                {/* {this.state.infoCards.map( (oneCard, idx) => {
                        return (
                            <Card DataShown={oneCard} key={idx} onDelete={this.delete.bind(this)} id={oneCard.id} originaldate={oneCard.dob.date} />
                        )
                    })
                    } */}
            </View>
        )
    }
}