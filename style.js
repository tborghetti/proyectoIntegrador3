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
    title: {
      
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
     width: 300,
     height: 200,
     textAlign: "center",
     marginTop:100,
     marginBottom: 3,
     marginLeft: 2,
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

  export {styleApp, styleHeader, styleCardsContainer, styleCards, styleImportCards}