import { useEffect, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import starwarsApi from "../services/starwarsApi.js"
import starWars from "../assets/img/starwars.png"
import { useNavigate } from "react-router-dom";

export const Planets = () => {
    const navigate = useNavigate()

    const { store, dispatch } = useGlobalReducer()
    useEffect(() => {
        const params = 'planets'
        starwarsApi.getData(params).then(data => dispatch({
            type: 'getPlanets',
            payload: data.results || data
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
                {store.planets?.map((plan) => (
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
                        <img src={starWars} style={{ width: '250px' }}></img>
                        <h4 className="text-start mt-3">{plan.properties.name}</h4>
                        <p className="text-start mt-4">Population: {plan.properties.population}</p>
                        <p className="text-start">Terrain: {plan.properties.terrain}</p>
                        <div className="d-flex justify-content-between">
                            <button className="btn btn-outline-primary btn-sm"
                                onClick={() => navigate(`/planets/${plan.uid}`)}
                            >
                                Learn More!
                            </button>
                            <button className="btn btn-outline-warning btn-sm text-warning"
                                onClick={(e) => {
                                    e.preventDefault()
                                    dispatch({
                                        type: 'add_fav',
                                        payload: plan.properties.name
                                    })
                                }
                                }
                            > 💛</button>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
}