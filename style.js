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
      padding:15,
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
    Card:{
     width: 180,
     height: 350,
     textAlign: "center",
     marginTop:10,
     marginBottom: 3,
     marginLeft: 5,
     borderBottomWidth: 5,
     borderLeftWidth: 1,
     borderRightWidth: 1,
     borderTopWidth: 1,
     borderColor: '#242323',
     borderStyle: 'solid',
     borderRadius: 12,
     backgroundColor: '#363636',
     padding: 1,
     color: 'rgb(207,116,37)',
     alignItems:'center'
    },
    NameLastName: {
      fontSize: 20,
      color: '#ff7100',
      padding: 5,
      // fontFamily: 'sans-serif',
    },
    Mail:{
      color: '#fcb554',
      padding: 5,
    },
    Birthday:{
      color: 'whitesmoke',
      padding: 5,
    },
    Select:{
      alignSelf:'flex-start',
      margin: 5,
    },
    Close:{
      position:'absolute',
      right:5,
      top:5
    },
    MoreInfo:{
      backgroundColor: "#ff7100", 
      alignSelf: "center", 
      borderRadius:10, 
      padding:2, 
      marginTop:30,
      fontSize: 15
    },
    Comments: {
      backgroundColor: "#ff7100", 
      alignSelf: "center", 
      borderRadius:10, 
      padding:2, 
      marginTop:10,
    },
    submitComment:{
 
      width:100,
      height:30,
      backgroundColor:'orange',
      marginTop:50,
      borderRadius:10
    }
  });

  const styleFlatList = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      width:'100%',
      backgroundColor: "#363636"
    },
    card:{
      width:100
    },
    button: {
      backgroundColor: 'orange', 
      height: 60, 
      width: "100%",
      //position:'absolute',
      justifyContent: 'center',
       alignItems: 'center'
    },
    ActivityIndicator: {
      flex:1,
      justifyContent: 'center',
      alignItems:'center'
    },
    flatImport:{
      
      marginLeft:25
    },
    inputText:{
      width:100,
      height:25,
      borderRadius:10,
      backgroundColor:'pink',
      textAlign:'center'
    }
  });
  const styleModal = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    modal:{
      backgroundColor: '#363636',
      width:'80%',
      height:'75%',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      shadowOpacity:2,
      shadowColor:'#ff7100'
    },
    text:{
      fontSize: 20,
      color: 'white',
      padding: 2,
    },
    close:{
      position:'absolute',
      right:20,
      top:20
    }
  });
  const styleModalComments = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    modal:{
      backgroundColor: '#363636',
      width:'80%',
      height:'75%',
      justifyContent:'flex-start',
      paddingTop: 30,
      alignItems:'center',
      borderRadius:10,
      shadowOpacity:2,
      shadowColor:'#ff7100'
    },
    text:{
      fontSize: 20,
      color: 'white',
      padding: 4,
    },
    textTitle:{
      top: 20,
      fontSize: 30,
      color: 'white'
    },
    close:{
      position:'absolute',
      right:20,
      top:20
    },
    TextInput:{
      width: 150,
      color: 'black',
      backgroundColor: 'white',
      fontSize: 20,
      top: 20,
      borderRadius:4,
      textAlign:'center'
      
    }
  });
  const styleViewCards = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: "#363636",
      justifyContent:'center',
      alignItems: 'center'
    },
    recuperarDatos:{
      backgroundColor: "#ff7100", 
      borderRadius:5, 
      padding:2, 
      marginTop:30,
      fontSize: 15,
      alignItems:'center'
    },
    ocultarDatos:{
      backgroundColor: "#ff7100", 
      borderRadius:5, 
      padding:2, 
      marginTop: 10,
      fontSize: 15,
      alignItems:'center',
    },
    papelera:{
      backgroundColor: "green", 
      borderRadius:5, 
      padding:2, 
      marginTop: 10,
      fontSize: 15,
      alignItems:'center',
    }
  });

  export {styleApp, 
    styleHeader, 
    styleCardsContainer, 
    styleCards, 
    styleFlatList,
    styleModal, 
    styleModalComments,
    styleViewCards}