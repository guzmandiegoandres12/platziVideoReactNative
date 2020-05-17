import {SET_SELECTED_MOVIE} from '../reduxTypes';

export const selectedMovieAction= (state) =>{
  return{
    type:SET_SELECTED_MOVIE,
    payload:state
  }
}