import stateReducer from './state';
import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['states']
};
const rootReducer = combineReducers({
  stateReducer: persistReducer(persistConfig, stateReducer)
});

export default rootReducer