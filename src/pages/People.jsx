import useGlobalReducer from "../hooks/useGlobalReducer";
import { useParams } from "react-router-dom";
import starwarsApi from "../services/starwarsApi.js"
import { useEffect } from "react";
import starWars from "../assets/img/starwars.png"

export const People = () => {
    const { id } = useParams()
    const { store, dispatch } = useGlobalReducer()
    useEffect(() => {
        const params = `people`
        starwarsApi.getRecord(params, id).then(data => {
            console.log("DATA:", data)
            dispatch({
                type: 'getPeople',
                payload: data
            })
        })
    }, [id])
    const character = store.people;
    return (
        <div className="container mt-4 d-flex justify-content-center flex-column">
            <div className="card mb-3 border-0">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/people/${character.uid}.jpg?raw=true`} className="img-fluid rounded-start" alt="..."></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-center">
                            <h1 className="card-title">{character?.properties?.name}</h1>
                            <p className="card-text">{character?.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border border-danger"></hr>
            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center text-danger gap-4 text-center">
                <p>Birth Year<br />{character?.properties?.birth_year}</p>
                <p>Gender<br />{character?.properties?.gender}</p>
                <p>Height<br />{character?.properties?.height}</p>
                <p>Skin Color<br />{character?.properties?.skin_color}</p>
                <p>Eye Color<br />{character?.properties?.eye_color}</p>
            </div>
        </div>
    )
}