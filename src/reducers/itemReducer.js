import { FETCH_PEOPLE } from '../actions/index';

const INITIAL_STATE = { all: [], item: null };

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case FETCH_PEOPLE:
			return { ...state, all: action.payload.data };
		default: return state;
	}
}
