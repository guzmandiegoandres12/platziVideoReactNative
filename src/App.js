import React,{ useEffect } from 'react';
import { View, Text } from 'react-native';
import Api from '../utils/api';
import { PersistGate } from 'redux-persist/integration/react';
import {Provider} from 'react-redux'
import { store, persistor} from './persistor'
import Loading from './Componets/Loading';
import AppLayout from './views/AppLayout';

export default function  App () {

  useEffect(()=>{
    const getData = async() =>{
      const sugestions = await Api.getSugestions(5)
      const categories = await Api.getCategories()
      store.dispatch({
        type:"SET_CATEGORIES_LIST",
        payload:{
          categories
        }
      })
      store.dispatch({
        type:"SET_SUGESTION_LIST",
        payload:{
          sugestions
        }
      })
    }
    getData()
  },[])
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Loading />} >
       <AppLayout />
      </PersistGate>
    </Provider> 
  );
}
  
