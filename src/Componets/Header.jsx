import React, {Component} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';


export default class Header  extends Component {
    render(){
    return (
        <View style={styles.constainer}>
           <Image source={require('../assets/logo.webp')}  
                style={styles.logo}
           />
           {this.props.children}
        </View>
        )
    }
    
};
const styles = StyleSheet.create({
    constainer:{
        marginTop: Constants.statusBarHeight,
        flexDirection: 'row',
        alignContent:"space-between",
        justifyContent:"space-between",
        padding: 10,
        backgroundColor:'#0791e6'
    },
    logo:{
        width:100,
        height:40,
        resizeMode:"contain"
    }
})
