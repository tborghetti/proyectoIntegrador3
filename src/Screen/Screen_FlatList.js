import React, { Component } from 'react';
import {
    FlatList,
    Text, 
    TouchableOpacity, 
    View
} from 'react-native';
import { getData } from '../api/RandomUsers';


export class Screen_FlatList extends Component{
    constructor(){
        super();
        this.state={
            infoCards:[]
        }
    }

    componentDidMount(){
        getData()
        .then((users) => {
            this.setState({
                infoCards:users
            })
        })
    }

    renderItem = ({item}) => {
        return(
            <View>
                <Text>{item.name.last},{item.name.first}</Text>
            </View>
        )
    }

    keyExtractor = (item, idx) => idx.toString()

    render(){
        return(
            <View> 
            <FlatList
                data={this.state.infoCards}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
            >

            </FlatList>
            </View>
        )
    }

}




