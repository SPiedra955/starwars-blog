import { useEffect, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import starwarsApi from "../services/starwarsApi.js"
export const Characters = () => {

    const { store, dispatch } = useGlobalReducer()
    useEffect(() => {
        starwarsApi.getPeopleData().then(data => dispatch({
            type: 'getData',
            payload: {
                people: data
            }
        }))
    }, [])

    return (
        <div className="text-center mt-5 container">
            <h1>Characters</h1>
            {store.people?.map((ppl) => (
                <div
                    key={ppl.uid}
                    className="d-flex justify-content-between align-items-center border p-2">
                    {ppl.name}
                </div>
            ))}
        </div>
    );
}