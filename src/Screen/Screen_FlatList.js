import React, { Component } from 'react';
import {
  FlatList,
    Text,
    View
} from 'react-native';
import {styleCards, styleFlatList,styleImportCards,styleHeader} from '../../style';
import Cards from '../Components/Cards';


export default class Screen_FlatList extends Component {
    constructor(){
        super();
        this.state = {
          infoCards: []
        }
    }

    componentDidMount(){
      fetch('https://randomuser.me/api/?results=22')
      .then((result) => result.json())
      .then((data) => { 
        this.setState({infoCards: data.results})
      })
    }

renderItem = ({item})=> {
  return(
    <View >
      {this.state.infoCards.map( (oneCard, idx) => {
        return (
           <Cards DataShown={oneCard} key={idx} id={oneCard.id} 
           originaldate={oneCard.dob.date} />
           )
         })
      }
    </View>
  )
}


keyExtractor = (item, idx) => idx.toString() 

    render() {
        return (
            <View style={styleFlatList.container}>
            <View style={styleHeader.container}>
              <Text style={styleHeader.title}>Header</Text>
            </View>
               <FlatList
               data={this.state.infoCards}
               keyExtractor={this.keyExtractor}
               renderItem={this.renderItem}
               numColumns={2}
               />
            </View>
        )
    }

}



//constructor(){
//    super();
//    this.state={
//        infoCards:[]
//    }
//}

//componentDidMount(){
  //  getData()
    //.then((users) => {
     //   this.setState({
       //     infoCards:users
       // })
  //  })
//}

//renderItem = ({item}) => {
  //  return(
    //    <View>
      //      <Text>{item.name.last},{item.name.first}</Text>
       // </View>
   // )
//}

//keyExtractor = (item, idx) => idx.toString()

//render(){
//    return(
 //       <View> 
 //       <FlatList
 //           data={this.state.infoCards}
 //           keyExtractor={this.keyExtractor}
  //          renderItem={this.renderItem}
  //      >

  //      </FlatList>
  //      </View>
 //   )
//}

//}






