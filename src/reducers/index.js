import { combineReducers } from 'redux';
import ItemsReducer from './itemReducer';

const rootReducer = combineReducers({
	items: ItemsReducer,
});

export default rootReducer;
