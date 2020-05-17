import React,{ useEffect } from 'react';
import { View, Text } from 'react-native';
import {useSelector} from 'react-redux'
import  Home  from "./Home";
import  Header from "../Componets/Header";
import Sugetionslist from '../Componets/SugetionsList';
import CategoriesList from '../Componets/CategoriesList';
import Movie from './Movie';

export default function  AppLayout () {
 const {movieSelected} =useSelector(store=>store)
 if(movieSelected){
   return(
    <Movie/>
  )
 } 
 return (
  <Home>
    <Header />
    <CategoriesList />
    <Sugetionslist  />
  </Home>
  );
}
  
