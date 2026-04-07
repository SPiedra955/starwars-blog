import { Link } from "react-router-dom";
import starWarsImg from "../assets/img/image.png"

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light container-fluid px-4 d-flex ">
			<div className="">
				<img src={starWarsImg} style={{ width: '60px' }}></img>
			</div>
			<div className="">
				<h1>Starwars Api</h1>
			</div>
			<div className="">
				<div class="btn-group">
					<button class="btn btn-primary dropdown-toggle btn-md" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites <span class="badge text-bg-secondary">4</span>
					</button>
					<ul class="dropdown-menu dropdown-menu-lg-end">
						<li><a class="dropdown-item" href="#">Action</a></li>
						<li><a class="dropdown-item" href="#">Another action</a></li>
						<li><a class="dropdown-item" href="#">Something else here</a></li>
					</ul>
				</div>
			</div>
		</nav >
	);
};