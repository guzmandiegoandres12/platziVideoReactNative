import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableHighlight } from 'react-native';
import {Video} from 'expo-av';
function PlayLayout (props) {
  let video;
  const initvideo = (Component) =>{
    video=Component
  }
  const play =async () => {
    video.playAsync()
  }
  const pause =async () => {
    video.pauseAsync()
  }
  return(
    <View>
      <Video
        ref={initvideo}
        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        style={styles.video}
      />
      <TouchableHighlight onPress={()=>play()}>
        <Text>play</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={()=>pause()}>
        <Text>pause</Text>
      </TouchableHighlight>
    </View>
  )
}
export default PlayLayout

const styles = StyleSheet.create({
  video:{
    paddingTop:"56.2%"
  }
})