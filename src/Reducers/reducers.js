export const Reducer = (state={},action) => {
  

  switch (action.type) {
    case 'SET_CATEGORIES_LIST':
      return{
        ...state,
        ...action.payload
      }
      break;
    case 'SET_SUGESTION_LIST':
      return{
        ...state,
        ...action.payload
      }
    break;
    default:
      return state
      break;
  }
  return state
}