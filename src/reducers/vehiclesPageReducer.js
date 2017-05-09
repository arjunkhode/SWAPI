import { SET_VEHICLES_PAGE } from '../actions/index';

const INITIAL_STATE = { page: 1 };

export default function vehiclesPageReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SET_VEHICLES_PAGE:
			return { ...state, page: action.payload };
		default: return state;
	}
}
