import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import langReducer from './langReducer';
import currentPageReducer from './currentPageReducer';

const rootReducer = combineReducers({
	items: itemReducer,
	language: langReducer,
	currentPage: currentPageReducer,
});

export default rootReducer;
