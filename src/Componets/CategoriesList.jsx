import React from 'react';
import { View, Text, FlatList } from 'react-native';
import {useSelector} from 'react-redux'
import CategoriesLayout from './Layouts/CategoriesLayout';
import Category from './Category';

function  CategoriesList (props) {
  const categories= useSelector(({categories})=>categories)
  const keyestractor = item => item.id.toString()
  return(
    <CategoriesLayout title="Categorias">
      <FlatList 
         keyExtractor = {keyestractor}
        data={categories}
        horizontal
        renderItem={({ item })=><Category {...item}/>} 
      />
    </CategoriesLayout>
  )
}

export default CategoriesList