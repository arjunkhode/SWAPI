import axios from 'axios';

export const FETCH_PEOPLE = 'FETCH_PEOPLE';
export const FETCH_VEHICLES = 'FETCH_VEHICLES';
export const FETCH_STARSHIPS = 'FETCH_STARSHIPS';
export const FETCH_PLANETS = 'FETCH_PLANETS';
export const SWAP_LANGUAGE = 'SWAP_LANGUAGE';
export const SET_PAGE = 'SET_PAGE';
export const LOAD_PAGE = 'LOAD_PAGE';
export const CLEAR_PAGE = 'CLEAR_PAGE';
export const SET_PEOPLE_PAGE = 'SET_PEOPLE_PAGE';
export const SET_PLANETS_PAGE = 'SET_PLANETS_PAGE';
export const SET_VEHICLES_PAGE = 'SET_VEHICLES_PAGE';
export const SET_STARSHIPS_PAGE = 'SET_STARSHIPS_PAGE';
// export const SEARCH = 'SEARCH';
// export const FETCH_SEARCH_RESULTS = 'FETCH_SEARCH_RESULTS';
// export const INCREMENT_NO = 'INCREMENT_NO';

const ROOT_URL = 'http://swapi.co/api';

export function swapLanguage(lang) {
	// console.log("I swapped the language, action, the new lang is",lang);
	return {
		type: SWAP_LANGUAGE,
		payload: lang,
	};
}

// export function incrementNo(num) {
// 	console.log("I got the no and am incrementing the foll:",num);
// 	return {
// 		type: INCREMENT_NO,
// 		payload: num+1,
// 	};
// }

// export function search(term){
// 	console.log("search was triggered on",term);
// 	return{
// 		type: SEARCH,
// 		payload: term,
// 	};
// }

export function setPeoplePage(page){
	// console.log("Updating people page:",page);
	return {
		type: SET_PEOPLE_PAGE,
		payload: page,
	};

}

export function setPlanetsPage(page){
	// console.log("Updating planets page:",page);
	return {
		type: SET_PLANETS_PAGE,
		payload: page,
	};
}

export function setVehiclesPage(page){
	// console.log("Updating people page:",page);
	return {
		type: SET_VEHICLES_PAGE,
		payload: page,
	};
}

export function setStarshipsPage(page){
	// console.log("Updating people page:",page);
	return {
		type: SET_STARSHIPS_PAGE,
		payload: page,
	};
}

// load Person
export function loadPage(link){
	const linkParts = link.split('/');
	const constructedLink = `${ROOT_URL}/${linkParts[0]}/${linkParts[1]}`;
	console.log("loadpage has this link:",constructedLink);
	// console.log("load page action link:", link, "constructed link:", constructedLink);
	
	const request = axios.get(constructedLink);
	// console.log("I loaded axios stuff");
	return {
		type: LOAD_PAGE,
		payload: request,
	};
}

export function clearCurrentPage(){
	return {
		type: CLEAR_PAGE,
		payload: [],
	}
}

export function setPage(num) {
	// console.log("page set to:",num);
	return {
		type: SET_PAGE,
		payload: num,
	}
}

// IMPORTANT: This function is named fetchPeople, but
// performs fetch function for any entity: planets, starships, etc.
export function fetchPeople(identifier,num) {
	//num states the page number. If none was set, load first page
	if(!num) num=1;
	const request = axios.get(`${ROOT_URL}/${identifier}/?page=${num}`);
	// request.then(data => data.json()).then((data)=>{console.log("action!",data)});
	return {
		type: FETCH_PEOPLE,
		payload: request,
	};
}

// export function fetchSearchResults(term) {
// 	console.log("FetchSR got term as:", term);
// 		const request = axios.get(`${ROOT_URL}/people/?search=${term}`);
// 		console.log("search query constructed is:",`${ROOT_URL}/people/?search=${term}`);
// 		return {
// 			type: FETCH_SEARCH_RESULTS,
// 			payload: request,
// 		};
// }
