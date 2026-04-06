import { Link } from "react-router-dom";
import starWarsImg from "../assets/img/image.png"

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<img src={starWarsImg} style={{width:'60px'}}></img>
		</div>
		</nav >
	);
};