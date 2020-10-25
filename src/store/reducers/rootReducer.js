import { combineReducers } from 'redux';
import { orgReducer } from './orgReducer';

const rootReducer = combineReducers({
  repos: orgReducer,
});

export default rootReducer;
