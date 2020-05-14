import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Sugestion_list_layout (props) {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      {props.children}
    </View>
  )
};
const styles=StyleSheet.create({
  container:{
    flex:1,
    marginTop:10,
    marginHorizontal:10
  },
  title:{
    fontSize:20,
    color:'#4c4c4c',
    fontWeight:'bold'
  }
})