import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, createStore } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import AuthReducer from './reducer/AuthReducer';


// Middleware: Redux Persist Config
const persistConfig = {
    // Root
    key: 'root',
    // Storage Method (React Native)
    storage: AsyncStorage,
    // Whitelist (Save Specific Reducers)
    whitelist: [
      'AuthReducer',
      'PlantillaReducer',
      'WifiReducer'
    ],
  
  };
  const rootReducer =combineReducers({AuthReducer})
  // Middleware: Redux Persist Persisted Reducer
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  // Red
 const store = createStore(persistedReducer)
 let persistor = persistStore(store);

 export {
    store,
    persistor,
  };