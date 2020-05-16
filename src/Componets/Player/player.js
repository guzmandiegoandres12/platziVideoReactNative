export const setState = (state)=>{
  setStateVideo({
    ...stateVideo,
    ...state
  })
}

export const play =async (video) => {
  await video.playAsync()
}

export const pause =async (video) => {
  await video.pauseAsync()
}

export const resetVideo= async (video) =>{
  await video.playFromPositionAsync(0)
  await video.pauseAsync()
}

export const mute= async (video,mute) =>{
  await video.setIsMutedAsync(mute)
}

export const changeVol= async (video,volumen) =>{
  await video.setVolumeAsync(volumen)
}

