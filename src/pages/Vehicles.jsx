import useGlobalReducer from "../hooks/useGlobalReducer";
import { useParams } from "react-router-dom";
import starwarsApi from "../services/starwarsApi.js"
import { useEffect } from "react";
import starWars from "../assets/img/starwars.png"

export const Vehicles = () => {
    const { id } = useParams()
    const { store, dispatch } = useGlobalReducer()
    useEffect(() => {
        const params = `vehicles`
        starwarsApi.getRecord(params, id).then(data => {
            console.log("DATA:", data)
            dispatch({
                type: 'vehicle',
                payload: data
            })
        })
    }, [id])
    const veh = store.vehicle;
    return (
        <div className="container mt-4 d-flex justify-content-center flex-column">
            <div className="card mb-3 border-0">
                <div className="row g-0">
                    <div className="col-12 col-md-4">
                        <img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/vehicles/${veh?.uid}.jpg?raw=true`} className="img-fluid rounded-start" alt="..."></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-center">
                            <h1 className="card-title">{veh?.properties?.name}</h1>
                            <p className="card-text">{veh?.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border border-danger"></hr>
            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center text-danger gap-4 text-center">
                <p>Cargo Capacity<br />{veh?.properties?.cargo_capacity}</p>
                <p>Cost<br />{veh?.properties?.cost_in_credits}</p>
                <p>Crew<br />{veh?.properties?.crew}</p>
                <p>Manufacturer<br />{veh?.properties?.manufacturer}</p>
                <p>Modelr<br />{veh?.properties?.model}</p>
            </div>
        </div>
    )
}