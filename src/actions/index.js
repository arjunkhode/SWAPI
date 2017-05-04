export const FETCH_PEOPLE = 'FETCH_PEOPLE';
export const FETCH_VEHICLES = 'FETCH_VEHICLES';
export const FETCH_STARSHIPS = 'FETCH_STARSHIPS';
export const FETCH_PLANETS = 'FETCH_PLANETS';

const ROOT_URL = 'http://swapi.co/api';

export function fetchPeople() {
	const request = fetch(`${ROOT_URL}/people`);
	request.then(data => data.json()).then((data)=>{console.log(data)});
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
