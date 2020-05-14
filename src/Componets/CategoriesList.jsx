import React from 'react';
import { View, Text, FlatList } from 'react-native';
import CategoriesLayout from './Layouts/CategoriesLayout';
import Category from './Category';
function  CategoriesList (props) {
  return(
    <CategoriesLayout title="Categorias">
      <FlatList 
        data={props.data}
        horizontal
        renderItem={({ item })=><Category {...item}/>} 
      />
    </CategoriesLayout>
  )
}

export default CategoriesList