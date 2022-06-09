import "../styles/Banner.css";
import { Link } from 'react-router-dom';



function Banner({ children }) {
	return (

		<div className="lmj-banner mb-2">



			<div className="mb-4">


				<nav className="navbar navbar-light navbar-expand-md  bg-light fixed-top">
					<div className="container-fluid">
						<a className="navbar-brand" href="#">Offcanvas navbar</a>
						<button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
							<span className="navbar-toggler-icon">iubibi</span>
						</button>
						<div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
							<div className="offcanvas-header">
								<h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
								<button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
							</div>
							<div className="offcanvas-body">
								<ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
									<li className="nav-item">

										<Link to="/">

											<span className="nav-link active" aria-current="page">Home</span>
										</Link>



									</li>
									<li className="nav-item">
										<Link to="/components/PlantItem">

											<span className="nav-link active" aria-current="page">Rumbles</span>
										</Link>


									</li>
									<li className="nav-item dropdown">
										<a className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
											Dropdown
										</a>
										<ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
											<li><a className="dropdown-item" href="#">Action</a></li>
											<li><a className="dropdown-item" href="#">Another action</a></li>
											<li>
												<hr className="dropdown-divider" />
											</li>
											<li><a className="dropdown-item" href="#">Something else here</a></li>

										</ul>
									</li>
								</ul>
								<form className="d-flex">
									<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
									<button className="btn btn-outline-success" type="submit">Search</button>
								</form>
							</div>
						</div>
					</div>
				</nav>
			</div>


			{children}
		</div>
	);
}

export default Banner;
