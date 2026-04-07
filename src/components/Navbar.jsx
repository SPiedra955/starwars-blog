import { Link } from "react-router-dom";
import starWarsImg from "../assets/img/image.png"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer()
	console.log(store.favorites)
	return (
		<nav className="navbar navbar-light bg-light container-fluid px-4 d-flex ">
			<div className="">
				<img src={starWarsImg} style={{ width: '60px' }}></img>
			</div>
			<div className="">
				<h1>Starwars Api</h1>
			</div>

			<div className="">
				<div className="btn-group">
					<button className="btn btn-primary dropdown-toggle btn-md" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites <span className="badge text-bg-secondary">{store.favorites.length}</span>
					</button>
					<ul className="dropdown-menu dropdown-menu-lg-end">
						{store.favorites?.map((fav, index) => (
							<li key={index}><a className="dropdown-item" href="#">{fav}</a></li>
						))}
			
					</ul>
				</div>
			</div>
		</nav >
	);
};