import React from 'react';
import { View, Text ,StyleSheet , ImageBackground } from 'react-native';

function CategoriesLayout(props) {
  return(
    <ImageBackground 
      style={styles.container}
      source={require('../../assets/backgronund.png')}
    >
      <Text style={styles.title}>{props.title}</Text>
      {props.children}
    </ImageBackground>
  )
}

export default CategoriesLayout

const styles=StyleSheet.create({
  container:{
    height:120,
    marginTop:10,
    marginHorizontal:10,
  },
  title:{
    fontSize:20,
    color:'#4c4c4c',
    fontWeight:'bold'
  }
})