import React,{useCallback, Fragment} from 'react';
import { View ,TouchableOpacity, StyleSheet, Image, Text} from 'react-native';
import PlayLayout from '../Componets/Layouts/PlayLayout';
import Header from '../Componets/Header';
import {useDispatch} from 'react-redux';
import { selectedMovieAction} from '../Actions/Actions';
export default function  Movie(){
  const dispatch=useDispatch()
  const close = useCallback(
    ()=>dispatch(selectedMovieAction(null)),
    [dispatch]
  )
  return(
    <Fragment>
      <Header>
        <TouchableOpacity
          onPress={()=>close()}
          style={styles.container}
        >
          <Image
            source={require('../assets/icons/close.png')}
            style={styles.close}
          />
        </TouchableOpacity>
      </Header>
      <PlayLayout />
    </Fragment>
  )
}
const styles=StyleSheet.create({
  container:{
   alignItems:'center',
   justifyContent:'center',
   borderRadius:20
  },
  close:{
    width:30,
    height:20,
  }
})