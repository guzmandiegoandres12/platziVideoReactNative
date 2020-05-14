import React,{Component} from 'react';
import { View, Text } from 'react-native';
import  Home  from "./views/Home";
import  Header from "./Componets/Header";
import Sugetionslist from './Componets/SugetionsList';
import CategoriesList from './Componets/CategoriesList';
import PlayLayout from './Componets/Layouts/PlayLayout';
import Api from '../utils/api';

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
    this.setState({
      sugestions,
      categories
    })
  }
  render(){
    return (
      <Home>
        <Header />
        <PlayLayout />
        <CategoriesList data={this.state.categories}/>
        <Sugetionslist data={this.state.sugestions} />
      </Home>
    );
  }
  
}
