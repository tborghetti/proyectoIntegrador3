import React, { Component } from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
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
          infoCards: [],
          activity:true
        }
    }

    componentDidMount(){
      fetch('https://randomuser.me/api/?results=3')
      .then((result) => result.json())
      .then((data) => { 
        this.setState({infoCards: data.results, activity: false})
      })
    }

    

renderItem = ({item})=> {
  return(
    <View>
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
            {
              this.state.activity &&
              <ActivityIndicator
              size='large'
              color='orange' />
            }
              
               <FlatList 
               style={styleFlatList.indicator}
               data={this.state.infoCards}
               keyExtractor={this.keyExtractor}
               renderItem={this.renderItem}
               numColumns={2}
               />

              <TouchableOpacity
	            style= {styleFlatList.button}
              onPress={() => this.props.navigation.navigate('Screen_ViewImportCards')}
	            > 
	              	<Text style= {{fontSize: 15, fontWeight: "bold"}}>Importar Tarjetas</Text>
	            </TouchableOpacity>

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






