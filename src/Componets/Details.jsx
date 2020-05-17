import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView,} from'react-native';
import { WebView } from 'react-native-webview';

export default function Details (props){ 
  return(
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={styles.title} >{props.title}</Text>
        </View>
        <View style={styles.containerescription}>
          <Image
            source={{
              uri: props.image
            }}
            style={styles.image}
          />
          <Text style={styles.textDescription}>{props.description}</Text>
        </View>
        <WebView source={{ uri: 'https://expo.io' }} style={{ marginTop: 20,width:'100%',height:300 }} />
      </View>
    </ScrollView>
  )
}
const styles=StyleSheet.create({
  container:{
    padding:10
  },
  image:{
    width: 100,
    height: 175
  },
  containerTitle:{
    padding:5
  },
  title:{
    color: '#44546b',
    fontSize: 18,
    fontWeight: 'bold',
  },
  containerescription:{
    flex:1,
    padding:5,
    flexDirection:'row'
  },
  textDescription:{
    flex:1,
    paddingHorizontal:10,
    textAlign:'justify'
  }
})