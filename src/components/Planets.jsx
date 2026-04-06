import { useEffect, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import starwarsApi from "../services/starwarsApi.js"
export const Planets = () => {

    const { store, dispatch } = useGlobalReducer()
    useEffect(() => {
        starwarsApi.getPlanetData().then(data => dispatch({
            type: 'getData',
            payload: {
                planet: data
            }
        }))
    }, [])

    return (
        <div className="text-center mt-5 container">
            <h1>Planets</h1>
            {store.planet?.map((plan) => (
                <div
                    key={plan.uid}
                    className="d-flex justify-content-between align-items-center border p-2">
                    {plan.name}
                </div>
            ))}
        </div>
    );
}