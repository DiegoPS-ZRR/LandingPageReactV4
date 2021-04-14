import React from "react";

//create your first component
export function Navbar() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-primary bg-light">
				<a className="navbar-brand col-md-9" href="#">
					<img
						src="https://freepikpsd.com/wp-content/uploads/2019/11/fox-icon-png-Transparent-Images.png"
						width="30"
						height="30"
						// class="d-inline-block align-top"
						alt=""></img>
					FoxSoulUtions{" "}
				</a>
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto ">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Soulvers{" "}
								<span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Services{" "}
								<span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								FindUs{" "}
								<span className="sr-only">(current)</span>
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
