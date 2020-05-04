import React,{Component} from 'react';
import { View, Text } from 'react-native';
import  Home  from "./views/Home";
import  Header from "./Componets/Header";
import Sugetionslist from './views/SugetionsList';

export default class App  extends Component {
  
  render(){
    console.log("Load ...");
    
    return (
      <Home>
        <Header />
        <Sugetionslist />
      </Home>
    );
  }
  
}
