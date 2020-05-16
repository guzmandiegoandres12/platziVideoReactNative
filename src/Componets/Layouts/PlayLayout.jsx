import React, { useState } from 'react';
import { View, Text, StyleSheet  } from 'react-native';
import Controls from '../Player/Controls';
import {Video} from 'expo-av';
import {play, pause, resetVideo, mute, changeVol} from '../Player/player';
function PlayLayout (props) {
  
  const [video,setvideo]=useState()
  const [viseoStatus,setvideoStatus]=useState({
    play:false,
    videoProgress: 0,
    mute:true,
    volumen:1.0
  })
  const initvideo = (Component) =>{
    setvideo(Component)
  }
  const mutar = ()=>{
    setvideoStatus({
      ...viseoStatus,
      mute: ! viseoStatus.mute
    })
    mute(video,viseoStatus.mute)
  }
  const changeVolumen = (very) => {

    if( viseoStatus.volumen <= 1.0 &&  viseoStatus.volumen >= 0){
      if(very){
        const newVol = viseoStatus.volumen + .1 
        setvideoStatus({
          ...viseoStatus,
          volumen: newVol <= 1 ? newVol : 1 
        })
      }else{
        const newVol = viseoStatus.volumen - .1 
        setvideoStatus({
          ...viseoStatus,
          volumen: newVol >= 0 ? newVol : 0 
        })
      }
      changeVol(video,viseoStatus.volumen)
    }
    
  }
  
  const updatePlaybackCallback =async( {didJustFinish,isPlaying,playableDurationMillis,positionMillis  }) => {
    let progress=(positionMillis * 100 ) / playableDurationMillis;
    setvideoStatus({
      ...viseoStatus,
      play:isPlaying,
      videoProgress:progress 
    })   
    if(didJustFinish){
      resetVideo(video)
    }
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
        onPlaybackStatusUpdate={updatePlaybackCallback}
      />
      <Controls
        progress={viseoStatus.videoProgress}
        iconPause={viseoStatus.play}
        play={()=>play(video)}
        pause={()=>pause(video)}
        upVol={()=>changeVolumen(true)}
        downVol={()=>changeVolumen(false)}
        mute={()=>mutar()}
        isMuted={viseoStatus.mute}
      />
    </View>
  )
}
export default PlayLayout

const styles = StyleSheet.create({
  video:{
    paddingTop:"56.2%"
  }
})