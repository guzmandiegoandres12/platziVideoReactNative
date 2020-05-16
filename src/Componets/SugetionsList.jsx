import React,{ Component } from 'react';
import { Text, FlatList } from 'react-native';
import {useSelector} from 'react-redux';
import Sugestionlayout  from './Layouts/SugestionLayout';
import Empty from './Lists/Empty';
import VerticalSeparator from './Lists/VerticalSeparator';
import Sugestion from "./Sugestion";


export default function SugetionsList(props){
  const sugestions=useSelector(({sugestions})=>sugestions)
  keyestractor = item => item.id.toString()
  renderEmpty = () => <Empty text="No hay sugerencias" />
  itemSeparator = () => <VerticalSeparator/>
  return (
    <Sugestionlayout title="Sugerencias para ti">
      <FlatList 
        keyExtractor = {keyestractor}
        data={sugestions}
        renderItem={({ item })=><Sugestion {...item}/>}
        ListEmptyComponent={()=>renderEmpty()}
        ItemSeparatorComponent={()=>itemSeparator()}
      />
    </Sugestionlayout>
  );
}
