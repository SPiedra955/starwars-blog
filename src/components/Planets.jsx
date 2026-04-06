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
            <h1 className="text-start">Planets</h1>
            <div
                style={{
                    display: "flex",
                    overflowX: "auto",
                    gap: "16px",
                    padding: "10px 0"
                }}
            >
                {store.planet?.map((plan) => (
                    <div
                        key={plan._id}
                        style={{
                            minWidth: "250px",
                            flex: "0 0 auto",
                            border: "1px solid #ccc",
                            borderRadius: "8px",
                            padding: "16px",
                            textAlign: "center",
                            backgroundColor: "#f8f8f8"
                        }}
                    >
                        <h4 className="text-start">{plan.properties.name}</h4>
                        <p className="text-start">Population: {plan.properties.population}</p>
                        <p className="text-start">Terrain: {plan.properties.terrain}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}