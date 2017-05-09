import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import langReducer from './langReducer';
import currentPageReducer from './currentPageReducer';
import detailPageReducer from './detailPageReducer';
import peoplePageReducer from './peoplePageReducer';
import planetsPageReducer from './planetsPageReducer';

const rootReducer = combineReducers({
	items: itemReducer, // for contents of people page
	language: langReducer, // for Aurebesh/english swapping
	currentPage: currentPageReducer,
	currentDetailPage: detailPageReducer,
	peoplePage: peoplePageReducer,
	planetsPage: planetsPageReducer,
});

export default rootReducer;
