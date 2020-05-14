import React from 'react';
import { View, Text, StyleSheet, ImageBackground} from 'react-native';

function Category (props) {
  return(
    <ImageBackground 
      style={styles.constainer}
      source={{uri:props.background_image}}
      >
      {props.genres[0]?<Text style={styles.title}>{props.genres[0]}</Text>:null}
    </ImageBackground>
  )
}
export default Category

const styles=StyleSheet.create({
  constainer:{
    width: 200,
    margin :5,
    borderRadius:20,
    overflow:"hidden",
    alignItems:'center',
    justifyContent:'center'
  },
  title:{
    fontSize:32,
    color:"#ffffff",
    fontWeight:'bold',
    textShadowColor:"rgba(0,0,0,.75)",
    textShadowOffset:{
      width:2,
      height:2
    },
    textShadowRadius:0
  }
})