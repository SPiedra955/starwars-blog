import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import starwarsApi from "../services/starwarsApi.js"
import starWars from "../assets/img/starwars.png"
import { useNavigate } from "react-router-dom";

export const Vehicles = () => {
    const navigate = useNavigate()
    const { store, dispatch } = useGlobalReducer()
    useEffect(() => {
        const params = 'vehicles'
        starwarsApi.getData(params).then(data => dispatch({
            type: 'getVehicles',
            payload: data.results || data
        }))
    }, [])

    return (
        <div className="text-center mt-5 container">
            <h1 className="text-start">Vehicles</h1>
            <div
                style={{
                    display: "flex",
                    overflowX: "auto",
                    gap: "16px",
                    padding: "10px 0"
                }}
            >
                {store.vehicles?.map((vehicle) => (
                    <div
                        key={vehicle._id}
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
                        <img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/vehicles/${vehicle.uid}.jpg?raw=true`} style={{ width: '250px' }}></img>
                        <h4 className="text-start mt-3">{vehicle.properties.name}</h4>
                        <p className="text-start mt-4">Model: {vehicle.properties.model}</p>
                        <p className="text-start">Manufacturer: {vehicle.properties.manufacturer}</p>
                        <div className="d-flex justify-content-between">
                            <button className="btn btn-outline-primary btn-sm"
                                onClick={() => navigate(`/vehicles/${vehicle.uid}`)}
                            >
                                Learn More!
                            </button>
                            <button
                                className="btn btn-outline-warning btn-sm text-warning"
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();

                                    store.favorites.includes(vehicle.properties.name)
                                        ? dispatch({
                                            type: "deleteFav",
                                            payload: vehicle.properties.name,
                                        })
                                        : dispatch({
                                            type: "add_fav",
                                            payload: vehicle.properties.name,
                                        });
                                }}
                            >
                                💛
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}; 