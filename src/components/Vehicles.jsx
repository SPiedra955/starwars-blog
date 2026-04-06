import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import starwarsApi from "../services/starwarsApi.js"
import starWars from "../assets/img/starwars.png"
export const Vehicles = () => {

    const { store, dispatch } = useGlobalReducer()
    useEffect(() => {
        starwarsApi.getData().then(data => dispatch({
            type: 'getData',
            payload: {
                vehicles: data
            }

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
                        <img src={starWars} style={{ width: '250px' }}></img>
                        <h4 className="text-start mt-3">{vehicle.properties.name}</h4>
                        <p className="text-start mt-4">Model: {vehicle.properties.model}</p>
                        <p className="text-start">Manufacturer: {vehicle.properties.manufacturer}</p>
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
}; 