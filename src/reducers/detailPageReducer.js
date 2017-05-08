import { LOAD_PAGE } from '../actions/index';

const INITIAL_STATE = { pageContent: [] };

export default function detailPageReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case LOAD_PAGE:
			return { ...state, pageContent: action.payload.data };
		default: return state;
	}
}
