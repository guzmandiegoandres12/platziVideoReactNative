import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default function VerticalSeparator (props){
  return(
    <View style={[
      styles.container,
      {borderTopColor:(props.color)?props.color:'#eaeaea'}
    ]}/>
  )
};
const styles=StyleSheet.create({
  container:{
    borderTopWidth:1,
  }
})
