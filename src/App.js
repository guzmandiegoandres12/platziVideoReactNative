import React,{Component} from 'react';
import { View, Text } from 'react-native';
import  Home  from "./views/Home";
import  Header from "./Componets/Header";
import Sugetionslist from './views/SugetionsList';
import Api from '../utils/api';

export default class App  extends Component {
  constructor(props){
    super(props)
    this.state={
      sugestions:[]
    }
  }
  async componentDidMount(){
    const sugestions = await Api.getSugestions(20)
    this.setState({
      sugestions
    })
  }
  render(){
    return (
      <Home>
        <Header />
        <Sugetionslist data={this.state.sugestions} />
      </Home>
    );
  }
  
}
