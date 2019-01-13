import { combineReducers } from 'redux';
import { sagaReducer } from './fetchDataReducer';

const rootReducer = combineReducers({
    sagaReducer
});

export default rootReducer;