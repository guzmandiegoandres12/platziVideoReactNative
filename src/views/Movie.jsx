import React,{useCallback, Fragment} from 'react';
import {TouchableOpacity, StyleSheet, Image } from 'react-native';
import {useDispatch , useSelector} from 'react-redux';
import { selectedMovieAction} from '../Actions/Actions';
import PlayLayout from '../Componets/Layouts/PlayLayout';
import Header from '../Componets/Header';
import Details from '../Componets/Details';

export default function  Movie(){
  const dispatch=useDispatch()
  const {
    medium_cover_image:movieImage,
    title,
    summary
  }=useSelector(({movieSelected})=>movieSelected)

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
      <Details 
        title={title}
        description={summary}
        image={movieImage}
      />
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