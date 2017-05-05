import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import langReducer from './langReducer';

const rootReducer = combineReducers({
	items: itemReducer,
	language: langReducer,
});

export default rootReducer;
