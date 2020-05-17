import React,{Component} from 'react';
import { View, Text } from 'react-native';
import  Home  from "./views/Home";
import  Header from "./Componets/Header";
import Sugetionslist from './Componets/SugetionsList';
import CategoriesList from './Componets/CategoriesList';
import PlayLayout from './Componets/Layouts/PlayLayout';
import Api from '../utils/api';
import { PersistGate } from 'redux-persist/integration/react';
import {Provider} from 'react-redux'
import { store, persistor} from '../persistor'

export default class App  extends Component {
  
  constructor(props){
    super(props)
    this.state={
      sugestions:[],
      categories:[]

    }
  }

  async componentDidMount(){
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
  render(){
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<Text>cargando</Text>} >
          <Home>
            <Header />
            <PlayLayout />
            <CategoriesList />
            <Sugetionslist  />
          </Home>
       </PersistGate>
      </Provider>
    );
  }
  
}
