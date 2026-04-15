import useGlobalReducer from "../hooks/useGlobalReducer";
import { useParams } from "react-router-dom";
import starwarsApi from "../services/starwarsApi.js"
import { useEffect } from "react";
import starWars from "../assets/img/starwars.png"

export const Planets = () => {
    const { id } = useParams()
    const { store, dispatch } = useGlobalReducer()
    useEffect(() => {
        const params = `planets`
        starwarsApi.getRecord(params, id).then(data => {
            console.log("DATA:", data)
            dispatch({
                type: 'planet',
                payload: data
            })
        })
    }, [id])
    const pla = store.planet;
    return (
        <div className="container mt-4 d-flex justify-content-center flex-column">
            <div className="card mb-3 border-0">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/planets/${pla?.uid}.jpg?raw=true`} className="img-fluid rounded-start" alt="..."></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-center">
                            <h1 className="card-title">{pla?.properties?.name}</h1>
                            <p className="card-text">{pla?.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border border-danger"></hr>
            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center text-danger gap-4 text-center">
                <p>Climate<br />{pla?.properties?.climate}</p>
                <p>Diameter<br />{pla?.properties?.diameter}</p>
                <p>Population<br />{pla?.properties?.population}</p>
                <p>Rotation Period<br />{pla?.properties?.rotation_period}</p>
                <p>Terrain<br />{pla?.properties?.terrain}</p>
            </div>
        </div>
    )
}