import { SWAP_LANGUAGE } from '../actions/index';

const INITIAL_STATE = { lang: 'english' };

export default function langReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SWAP_LANGUAGE:
			return { ...state, lang: action.payload };
		default: return state;
	}
}
