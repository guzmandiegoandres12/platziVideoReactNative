import React, {Component} from 'react';
import { View,Text, StyleSheet, Image } from 'react-native';

class Sugestion extends Component {
  render() { 
    return (
      <View style={styles.container}>
        <View style={styles.image}>
          <Image source={{
              uri: this.props.medium_cover_image
            }}  
            style={styles.logo}
          />
            <View style={[
                styles.genero,
                {
                  backgroundColor:'#F8AC6D'
                }
                ]}>
              <Text style={styles.generoText}>{this.props.genres[0]}</Text>
            </View>
        </View>
        <View style={styles.description}>
          <Text style={styles.title}>{this.props.title}</Text>
              <Text style={styles.label}>Año {this.props.year}</Text>
              <Text>{this.props.rating} Estrellas</Text>
        </View>
      </View>
    );
  }
}

export default Sugestion;

const styles=StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    marginVertical:10
  },
  image:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    position:'relative'
  },
  description:{
    flex: 1.5,
    paddingLeft:5,
    justifyContent:"space-around"
  },
  title:{
    fontSize: 18,
    marginBottom:5,
    color: '#44546b'
  },
  label:{
    color :"green",
    marginBottom:2,
    fontSize:14,
  },
  logo:{
    height: 150,
    width: 100,
    resizeMode: 'contain'
  },
  genero:{
    position:'absolute',
    top:0,
    left:0,
  },
  generoText:{
    paddingHorizontal : 5,
    paddingVertical: 2,
  }
})