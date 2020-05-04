import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function Empty (props)  {
  return(
    <View style={styles.container}>
      <Text style={styles.texto}>
        {props.text}
      </Text>
    </View>
  )
};

const styles=StyleSheet.create({
  container:{
    flex:1,
    borderRadius: 4,
    backgroundColor: '#DCB2888f',
    borderColor: '#DCB288',
    paddingVertical:10,
    borderWidth:2,
    marginTop:10,
    marginHorizontal:25
  },
  texto:{
    textAlign: 'center',
    fontWeight: 'bold'
  }
}) 