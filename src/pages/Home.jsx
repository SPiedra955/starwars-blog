import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import starwarsApi from "../services/starwarsApi.js"
import { Characters } from "../components/Characters.jsx";
import { Planets } from "../components/Planets.jsx";
import { Vehicles } from "../components/Vehicles.jsx";
export const Home = () => {

	return (
		<div className="mt-5 container">
			<Characters></Characters>
			<Planets></Planets>
			<Vehicles></Vehicles>
		</div>
	);
}; 