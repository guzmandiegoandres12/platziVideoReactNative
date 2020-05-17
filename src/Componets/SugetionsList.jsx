import React,{ Component, useCallback  } from 'react';
import { Text, FlatList } from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import Sugestionlayout  from './Layouts/SugestionLayout';
import Empty from './Lists/Empty';
import VerticalSeparator from './Lists/VerticalSeparator';
import Sugestion from "./Sugestion";
import {selectedMovieAction} from '../Actions/Actions';

export default function SugetionsList(props){
  const {sugestions,movieSelected}=useSelector(store=>store)
  const dispatch=useDispatch()
  const selectedMovie = useCallback(
    (item) =>dispatch(selectedMovieAction(item)),
    [dispatch]
  )
  keyestractor = item => item.id.toString()
  renderEmpty = () => <Empty text="No hay sugerencias" />
  itemSeparator = () => <VerticalSeparator/>
  const renderItem = ({item}) => {    
    return(
      <Sugestion
        {...item}
        onPress={()=>selectedMovie(item)}
      />
    )
  }
  const click = (item) => {
   
  }
  return (
    <Sugestionlayout title="Sugerencias para ti">
      <FlatList 
        keyExtractor = {keyestractor}
        data={sugestions}
        renderItem={renderItem}
        ListEmptyComponent={()=>renderEmpty()}
        ItemSeparatorComponent={()=>itemSeparator()}
      />
    </Sugestionlayout>
  );
}
