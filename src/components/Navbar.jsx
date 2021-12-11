import React from "react";

function Navbar() {
	return (
		<div>
			<nav
				className="navbar navbar-expand-md navbar-dark bg-dark"
				aria-label="Fourth navbar example"
			>
				<div className="container-fluid">
					<a className="navbar-brand" href="/">
						Meeting Scheduler
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarsExample04"
						aria-controls="navbarsExample04"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarsExample04">
						<ul className="navbar-nav me-auto mb-2 mb-md-0">
							<li className="nav-item">
								<a className="nav-link" href="/">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/new-event">
									New Event
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/new-daily-event">
									New Daily Event
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Schedule Meeting
								</a>
							</li>
						</ul>
						<button
							type="button"
							className="btn btn-danger"
							onClick={() => {
								localStorage.clear();
								window.location = "/";
							}}
						>
							Logout
						</button>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
