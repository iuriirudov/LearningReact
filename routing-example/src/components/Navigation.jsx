import { Link } from "react-router-dom";
import { useContext } from "react";

import StudentsContext from "../store/students-context";

function Navigation() {
	const studentsCtx = useContext(StudentsContext);

	return (
		<nav className="navbar navbar-expand-sm navbar-light bg-light">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					Router-Example-In-React
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link to="/" className="nav-link active" aria-current="page" href="#">
								All Users
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/new" className="nav-link active" aria-current="page" href="#">
								Add User
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/students" className="nav-link active" aria-current="page" href="#">
								Students
								<span> ({studentsCtx.totalStudents})</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navigation;
