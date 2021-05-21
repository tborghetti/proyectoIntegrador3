import React, { Component } from 'react';
import Card from './Card';
import { TextInput, Touchable,
    View
} from 'react-native';
import { styleCardsContainer } from '../../style';

export default class CardsContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            infoCards:[ ],
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

      delete(idCard){
        console.log(idCard);
        let person = this.state.infoCards.filter((item)=>{
         return item.id !== idCard
       })
       this.setState({infoCards: person})
      }

      addCard(){
       let inputAdd = document.querySelector(".add").value //para obtenr el valor del input y sin el value te trae todo el input -  //aca tenemos que capturar el valor del input
       console.log(inputAdd)
        fetch('https://randomuser.me/api/?results='+ inputAdd) 
        .then((result) => result.json())
        .then((data) => { 
          let info = data.results.concat(this.state.infoCards); //concat:metodo que permite unir dos arrays en uno - guardar eso en una var - pusios primero el data.results para que 
          this.setState({infoCards: info})
        })
      }

      filterCards(){
        let inputFilter = document.querySelector(".filter").value.toUpperCase()
        console.log(inputFilter)
        let lookUp = this.state.infoCards.filter((search)=>{
            let fname = search.name.first.toUpperCase()
            let flastname = search.name.last.toUpperCase()
            let fage = search.dob.age.toString()

          return fname.startsWith(inputFilter) || flastname.startsWith(inputFilter) ||  fage.includes(inputFilter) //buscar si incluye el numero y pasar todo a string y poner con el metodo include()
          })
        console.log(lookUp)
          this.setState({infoCards: lookUp})
      }

      resetFilter(){
        this.setState({infoCards: this.state.infoCardsOriginal})
      }


    render(){
        return (
            <View>
                <Touchable onPress={this.resetFilter.bind(this)}
                // className="uk-align-center skewBtn lorang"
                >
                    <Text> RESET FILTER </Text>
                </Touchable>
                <View style={styleCardsContainer.container}>
                    <TextInput style={styleCardsContainer.add}
                    placeholder='# of Cards'
                    keyboardType='numeric'>
                        <Touchable onPress={this.addCard.bind(this)}> 
                            <i class="fas fa-plus"></i> 
                        </Touchable>
                    </TextInput>

                    <TextInput style={styleCardsContainer.filter}
                    onChange={this.filterCards.bind(this)}
                    placeholder='Filter' 
                    keyboardType='default' 
                    // required 
                    >
                        <Touchable onPress={this.filterCards.bind(this)}> 
                            <i class="fas fa-filter"></i> 
                        </Touchable>
                    </TextInput>
                </View>
                <View 
                //className="uk-grid-collapse uk-text-center"  uk-sortable="handle: .uk-sortable-handle" uk-grid='true'
                >
                    {/* {this.state.infoCards.map( (oneCard, idx) => {
                        return (
                            <Card DataShown={oneCard} key={idx} onDelete={this.delete.bind(this)} id={oneCard.id} originaldate={oneCard.dob.date} />
                        )
                    })
                    } */}
                </View>

            </View>
        );
    }
}