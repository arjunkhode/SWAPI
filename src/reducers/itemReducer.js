import _ from 'lodash';
import { FETCH_PEOPLE } from '../actions/index';

const INITIAL_STATE = { all: [] };

export default function itemReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case FETCH_PEOPLE:
			return { ...state, all: action.payload.data };
		default: return state;
	}
}
