import { 
  SET_CATEGORIES_LIST,
  SET_SUGESTION_LIST,
  SET_SELECTED_MOVIE
} from '../reduxTypes';
export const Reducer = (state={},action) => {
  switch (action.type) {
    case SET_CATEGORIES_LIST:
      return{
        ...state,
        ...action.payload
      }
      break;
    case SET_SUGESTION_LIST:
      return{
        ...state,
        ...action.payload
      }
    break;
    case SET_SELECTED_MOVIE:
      return{
        ...state,
        movieSelected:action.payload
      }
    default:
      return state
      break;
  }
  return state
}