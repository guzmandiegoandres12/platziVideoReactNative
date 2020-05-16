import React, {useState} from 'react';
import { View, TouchableHighlight,Text, StyleSheet, Image } from 'react-native';

const ImagePlay = require('../../assets/icons/reproducir.png');
const ImagePause = require('../../assets/icons/pausa.png');
const ImageVolMas = require('../../assets/icons/volmas.png');
const ImageVolMenos = require('../../assets/icons/volmenos.png');
const ImageMute = require('../../assets/icons/mute.png');

export default function  Controls(props){
  const changeStatePlay = () => {
    if(!props.iconPause){
      props.play()
    }else{
      props.pause()
    }
  }
  const btcMute=props.isMuted ? styles.boton:styles.botonCancel
  return(
    <View style={styles.container}>
      <TouchableHighlight 
        style={styles.boton}
        onPress={()=>changeStatePlay()}
      > 
       <Image
          style={styles.iconBoton}
          source={props.iconPause?ImagePause:ImagePlay} 
        />
      </TouchableHighlight> 
      <View style={styles.contentBar}>
        <View style={[styles.barIndicator,{
          width:`${props.progress || 0}%`
        }]}>
        </View>
      </View>
      <TouchableHighlight 
        style={styles.boton}
        onPress={()=>props.upVol()}
      > 
       <Image
          style={styles.iconBoton}
          source={ImageVolMas} 
        />
      </TouchableHighlight> 
      <TouchableHighlight 
        style={styles.boton}
        onPress={()=>props.downVol()}
      > 
       <Image
          style={styles.iconBoton}
          source={ImageVolMenos} 
        />
      </TouchableHighlight> 
      <TouchableHighlight 
        style={btcMute}
        onPress={()=>props.mute()}
      > 
       <Image
          style={styles.iconBoton}
          source={ImageMute} 
        />
      </TouchableHighlight> 
    </View>
  )
} 

const styles = StyleSheet.create({
  container:{
   flexDirection: 'row',
   backgroundColor:'rgba(228,228,228,.4)',
   padding:2,
   position:'absolute',
   bottom:0,
   right:0,
   left:0,
   alignItems:'center',
   justifyContent:'center'
  },
  boton:{
    marginHorizontal:3,
    marginVertical:2,
    borderRadius:15,
    justifyContent:'center',
    alignItems:'center',
    padding:2
  },
  botonCancel:{
    marginHorizontal:3,
    marginVertical:2,
    borderRadius:15,
    justifyContent:'center',
    alignItems:'center',
    padding:2,
    backgroundColor:'rgba(255,71,65,.3)'
  },
  iconBoton:{
    width:25,
    height:25,
  },
  contentBar:{
    width:'40%',
    height:5,
    backgroundColor:'#FFFFFF',
    borderRadius:15,
    marginHorizontal:3,
  },
  barIndicator:{
    height:5,
    borderRadius:15,
    backgroundColor:'#0791e69f'
  }
})