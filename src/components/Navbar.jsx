import { Link } from "react-router-dom";
import starWarsImg from "../assets/img/image.png"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
	const navigate = useNavigate()
	const { store, dispatch } = useGlobalReducer()
	return (
		<nav className="navbar navbar-light bg-light container-fluid px-4 d-flex flex-column flex-md-row ">
			<div className="" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
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
						{store.favorites && store.favorites.length > 0 ? (
							store.favorites.map((fav, index) => (
								<li key={index} className="d-flex">
									<a className="dropdown-item" href="#">
										{fav}
									</a>

									<span
										className="mx-3"
										style={{ cursor: "pointer" }}
										onClick={(e) => {
											e.preventDefault();
											e.stopPropagation();
											dispatch({
												type: "deleteFav",
												payload: fav,
											});
										}}
									>
										🗑️
									</span>
								</li>
							))
						) : (
							<li className="dropdown-item text-muted">Empty</li>
						)}
					</ul>
				</div>
			</div>
		</nav >
	);
};