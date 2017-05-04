import _ from 'lodash';
import { FETCH_PEOPLE } from '../actions/index';

const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case FETCH_PEOPLE:
			return _.mapKeys(action.payload.data, 'name');
		default: return state;
	}
}
