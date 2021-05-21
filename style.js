import {StyleSheet} from "react-native";

const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
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
      justifyContent: "space-between",
    },
    add: {
      width: 75,
      borderWidth: 2, 
      borderStyle: 'solid', 
      borderRadius: 5, 
      borderColor: '#f4a40c', 
      color: '#f4a40c',
      backgroundColor: 'none',
      textAlign: 'center',
    },
    filter:{
      width: 75,
      borderWidth: 2,
      borderStyle: 'solid',
      borderRadius: 5, 
      borderColor: '#f4a40c', 
      color: '#f4a40c',
      backgroundColor: 'none',
      textAlign: 'center',
    }
  });

  const styleCards = StyleSheet.create({
    container:{
      
    }
  });

  export {style, styleHeader, styleCardsContainer, styleCards}