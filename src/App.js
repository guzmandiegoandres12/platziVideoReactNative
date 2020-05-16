import React,{Component} from 'react';
import { View, Text } from 'react-native';
import  Home  from "./views/Home";
import  Header from "./Componets/Header";
import Sugetionslist from './Componets/SugetionsList';
import CategoriesList from './Componets/CategoriesList';
import PlayLayout from './Componets/Layouts/PlayLayout';
import Api from '../utils/api';
import {createStore} from 'redux';
import {Reducer} from './Reducers/reducers';
import {Provider} from 'react-redux'

const store=createStore(Reducer,{data:"ok"})

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
        <Home>
          <Header />
          <PlayLayout />
          <CategoriesList />
          <Sugetionslist  />
        </Home>
      </Provider>
    );
  }
  
}
