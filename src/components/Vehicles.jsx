import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import starwarsApi from "../services/starwarsApi.js"


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
                        <h4 className="text-start">{vehicle.properties.name}</h4>
                        <p className="text-start">Model: {vehicle.properties.model}</p>
                        <p className="text-start">Manufacturer: {vehicle.properties.manufacturer}</p>

                    </div>
                ))}
            </div>
        </div>
    );
}; 