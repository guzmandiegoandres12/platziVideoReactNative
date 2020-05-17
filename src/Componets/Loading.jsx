import React from 'react';
import { View , ActivityIndicator, StyleSheet, Text} from 'react-native';

export default function Loading (){
  return(
    <View style={styles.container}>
      <ActivityIndicator size={100}/>
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    position: 'relative',
    top:0,
    bottom:0,
    right: 0,
    left:0,
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})