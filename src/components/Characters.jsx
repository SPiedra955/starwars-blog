import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import starwarsApi from "../services/starwarsApi.js"
import starWars from "../assets/img/starwars.png"
import { useNavigate } from "react-router-dom";

export const Characters = () => {
    const navigate = useNavigate()

    const { store, dispatch } = useGlobalReducer()
    useEffect(() => {
        const params = 'people'

        starwarsApi.getData(params).then(data => {
            console.log("API DATA =>", data)
            dispatch({
                type: 'getData',
                payload: data.results || data
            })
        })
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
                {store.data?.map((ppl) => (
                    <div
                        key={ppl.uid}
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
                            <button className="btn btn-outline-primary btn-sm"
                                onClick={() => navigate(`/people/${ppl.uid}`)}
                            >
                                Learn More!
                            </button>
                            <button className="btn btn-outline-warning btn-sm text-warning"
                                onClick={(e) => {
                                    e.preventDefault()
                                    dispatch({
                                        type: 'add_fav',
                                        payload: ppl.properties.name
                                    })
                                }}
                            > 💛</button>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}