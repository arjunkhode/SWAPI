import { SET_STARSHIPS_PAGE } from '../actions/index';

const INITIAL_STATE = { page: 1 };

export default function starshipsPageReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SET_STARSHIPS_PAGE:
			return { ...state, page: action.payload };
		default: return state;
	}
}
