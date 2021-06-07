import {StyleSheet} from "react-native";

const styleApp = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#363636',
      alignItems: 'center',
      justifyContent: 'center'
    },
  });
  
  const styleHeader = StyleSheet.create({
    container:{
      width:'100%',
      padding:50,
      marginTop:0,
      backgroundColor:'grey',
      justifyContent:'center',
      alignItems:'center',
      marginBottom:10
    },
    title: {
      color:'white',
      fontWeight:'bold',
      fontSize:40
    },
  });

  const styleCardsContainer = StyleSheet.create({
    container:{
      margin: 10,
      flex: 1,
      justifyContent: "space-between"
    },
    add: {
      width: 75,
      borderWidth: 2, 
      borderStyle: 'solid', 
      borderRadius: 5, 
      borderColor: '#f4a40c', 
      color: '#f4a40c',
      textAlign: 'center',
    },
    filter:{
      width: 75,
      borderWidth: 2,
      borderStyle: 'solid',
      borderRadius: 5, 
      borderColor: '#f4a40c', 
      color: '#f4a40c',
      textAlign: 'center',
    }
  });

  const styleCards = StyleSheet.create({
    ViewCard:{
     width: 200,
     height: 300,
     textAlign: "center",
     marginTop:10,
     marginBottom: 3,
     marginLeft: 5,
     borderBottomWidth: 5,
     borderLeftWidth: 1,
     borderRightWidth: 1,
     borderTopWidth: 1,
     borderColor: '#C0FF38',
     borderStyle: 'solid',
     borderRadius: 12,
     backgroundColor: '#363636',
     padding: 1,
     color: 'rgb(207,116,37)',
     alignItems:'center'
    },
    NameLastName: {
      color: '#ff7100',
      // fontFamily: 'sans-serif',
    },
    Mail:{
      color: '#fcb554'
    },
    Birthday:{
      color: 'whitesmoke'
    }
  });

  const styleImportCards = StyleSheet.create({
    container:{
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
    }
  });

  const styleFlatList = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      width:'100%'
    },
    card:{
      width:100
      
    }
  })


  export {styleApp, styleHeader, styleCardsContainer, styleCards, styleImportCards, styleFlatList}