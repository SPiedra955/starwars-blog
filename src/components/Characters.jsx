import { useEffect, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import starwarsApi from "../services/starwarsApi.js"
import starWars from "../assets/img/starwars.png"

export const Characters = () => {


    const { store, dispatch } = useGlobalReducer()
    useEffect(() => {
        const params = 'people'
        starwarsApi.getData(params).then(data => dispatch({
            type: 'getData',
            payload: {
                people: data
            }
        }))
    }, [])

    return (
        <div className="text-center mt-5 container">
            <h1 className="text-start">Characters</h1>
            <div
                style={{
                    display: "flex",
                    overflowX: "auto",
                    gap: "16px",
                    padding: "10px 0"
                }}
            >
                {store.people?.map((ppl) => (
                    <div
                        key={ppl._id}
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
                        <h4 className="text-start mt-3">{ppl.properties.name}</h4>
                        <p className="text-start mt-4">Gender: {ppl.properties.gender}</p>
                        <p className="text-start">Hair: {ppl.properties.hair_color}</p>
                        <p className="text-start">Eye Color: {ppl.properties.eye_color}</p>
                        <div className="d-flex justify-content-between">
                            <button className="btn btn-outline-primary btn-sm">
                                Learn More!
                            </button>
                            <button className="btn btn-outline-warning btn-sm text-warning"
                            > 💛</button>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}