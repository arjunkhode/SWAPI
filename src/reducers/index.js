import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import langReducer from './langReducer';
import currentPageReducer from './currentPageReducer';
import detailPageReducer from './detailPageReducer';
import peoplePageReducer from './peoplePageReducer';
import planetsPageReducer from './planetsPageReducer';
import vehiclesPageReducer from './vehiclesPageReducer';
import starshipsPageReducer from './starshipsPageReducer';
// import searchReducer from './searchReducer';
// import noReducer from './noReducer';
// import searchResultsReducer from './searchResultsReducer';

const rootReducer = combineReducers({
	items: itemReducer, // for contents of people page
	language: langReducer, // for Aurebesh/english swapping
	currentPage: currentPageReducer,
	currentDetailPage: detailPageReducer,
	peoplePage: peoplePageReducer,
	planetsPage: planetsPageReducer,
	vehiclesPage: vehiclesPageReducer,
	starshipsPage: starshipsPageReducer,
	// searchTerm: searchReducer,
	// nom: noReducer,
	// searchResults: searchResultsReducer,
});

export default rootReducer;
