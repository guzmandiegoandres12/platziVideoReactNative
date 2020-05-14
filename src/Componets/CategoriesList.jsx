import React from 'react';
import { View, Text, FlatList } from 'react-native';
import CategoriesLayout from './Layouts/CategoriesLayout';
import Category from './Category';
function  CategoriesList (props) {
  const keyestractor = item => item.id.toString()
  return(
    <CategoriesLayout title="Categorias">
      <FlatList 
         keyExtractor = {keyestractor}
        data={props.data}
        horizontal
        renderItem={({ item })=><Category {...item}/>} 
      />
    </CategoriesLayout>
  )
}

export default CategoriesList