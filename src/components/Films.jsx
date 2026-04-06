import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import starwarsApi from "../services/starwarsApi.js"


export const Films = () => {

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
            {store.films?.map((film) => (
                <div
                    key={film.uid}
                    className="d-flex justify-content-between align-items-center border p-2">
                    {film.properties.title}
                </div>
            ))}

        </div>
    );
}; 