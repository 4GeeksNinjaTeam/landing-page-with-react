import React from "react";
export const NavBar = props => {
	return (
		<div className="container-fluid p-0">
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
				<div className="container">
					<a className="navbar-brand" href="#">
						Start Bootstrap
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNavDropdown"
						aria-controls="navbarNavDropdown"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse  justify-content-end"
						id="navbarNavDropdown">
						<ul className="nav navbar-nav navbar-right">
							<li className="nav-item active">
								<a className="nav-link" href="#">
									Home{" "}
									<span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									About
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Services
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};
