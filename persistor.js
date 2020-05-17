import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import {Reducer} from './src/Reducers/reducers';
import { AsyncStorage } from 'react-native';

//import AsyncStorage from '@react-native-community/async-storage';
const persistConfig = {
  key: 'root',
  storage,
}


const persistedReducer = persistReducer(persistConfig, Reducer)

const store = createStore(persistedReducer,{})
const persistor = persistStore(store)

export { store, persistor };

storage