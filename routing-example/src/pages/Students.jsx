import { useContext } from "react";

import StudentsContext from "../store/students-context";
import User from "../components/User";

function Students() {
	const studentsCtx = useContext(StudentsContext);

	if (studentsCtx.totalStudents === 0) {
		return (
			<div className="container">
				<h2>Students</h2>
				<p>No students enrolled yet</p>
			</div>
		);
	} else {
		return (
			<div className="container">
				<h2>Students</h2>
				<table className="table">
					<thead>
						<tr>
							<th scope="col">Name</th>
							<th scope="col">Email</th>
						</tr>
					</thead>
					<tbody>
						{studentsCtx.students.map((user) => {
							return <User key={user.id} user={user} />;
						})}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Students;
