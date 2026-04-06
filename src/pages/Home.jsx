import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import starwarsApi from "../services/starwarsApi.js"
import { Characters } from "../components/Characters.jsx";
import { Planets } from "../components/Planets.jsx";
import { Films } from "../components/Films.jsx";
export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	useEffect(() => {
		starwarsApi.getData().then(data => dispatch({
			type: 'getData',
			payload: {
				films: data
			}

		}))
	}, [])

	return (
		<div className="text-center mt-5 container">
			<h1>Star wars API</h1>
			<Films></Films>
			<Characters></Characters>
			<Planets></Planets>
		</div>
	);
}; 