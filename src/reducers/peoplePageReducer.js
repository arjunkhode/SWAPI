import { SET_PEOPLE_PAGE } from '../actions/index';

const INITIAL_STATE = { page: 1 };

export default function peoplePageReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SET_PEOPLE_PAGE:
			return { ...state, page: action.payload };
		default: return state;
	}
}
