import axios from 'axios';

export const FETCH_PEOPLE = 'FETCH_PEOPLE';
export const FETCH_VEHICLES = 'FETCH_VEHICLES';
export const FETCH_STARSHIPS = 'FETCH_STARSHIPS';
export const FETCH_PLANETS = 'FETCH_PLANETS';
export const SWAP_LANGUAGE = 'SWAP_LANGUAGE';
export const SET_PAGE = 'SET_PAGE';
export const LOAD_PAGE = 'LOAD_PAGE';

const ROOT_URL = 'http://swapi.co/api';

export function swapLanguage(lang) {
	// console.log("I swapped the language, action, the new lang is",lang);
	return {
		type: SWAP_LANGUAGE,
		payload: lang,
	};
}

export function loadPage(link){
	const linkParts = link.split('/');
	const constructedLink = `${ROOT_URL}/${linkParts[0]}/${linkParts[1]}`;
	// console.log("load page action link:", link, "constructed link:", constructedLink);
	const request = axios.get(constructedLink);
	return {
		type: LOAD_PAGE,
		payload: request,
	};
}

export function setPage(num) {
	return {
		type: SET_PAGE,
		payload: num,
	}
}

export function fetchPeople(num) {
	//num states the page number. If none was set, load first page
	if(!num) num=1;
	const request = axios.get(`${ROOT_URL}/people/?page=${num}`);
	// request.then(data => data.json()).then((data)=>{console.log("action!",data)});
	return {
		type: FETCH_PEOPLE,
		payload: request,
	};
}
export function fetchVehicles() {
	const request = fetch(`${ROOT_URL}/vehicles`);
	return {
		type: FETCH_VEHICLES,
		payload: request,
	};
}
export function fetchPlanets() {
	const request = fetch(`${ROOT_URL}/Planets`);
	return {
		type: FETCH_PLANETS,
		payload: request,
	};
}
export function fetchStarships() {
	const request = fetch(`${ROOT_URL}/Starships`);
	return {
		type: FETCH_STARSHIPS,
		payload: request,
	};
}
