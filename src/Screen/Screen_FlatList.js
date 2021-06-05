import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';


export default class Screen_FlatList extends Component {
    render() {
        return (
            <View>
                <Text style = {{color: "white"}}>Hola</Text>
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






