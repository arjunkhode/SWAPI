// import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_PAGE } from '../actions/index';
import { CLEAR_PAGE } from '../actions/index';

const INITIAL_STATE = { pageContent: [] };

export default function detailPageReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		// case LOCATION_CHANGE:
		// 	return {};
		case CLEAR_PAGE:
			// console.log("Component unmounted");
			return { ...state, pageContent: action.payload };
		case LOAD_PAGE:
			return { ...state, pageContent: action.payload.data };
		default: return state;
	}
}
