import { useContext } from "react";
import StudentsContext from "../store/students-context";

function User(props) {
	const studentsCtx = useContext(StudentsContext);
	const userIsStudent = studentsCtx.isStudent(props.user.id);

	function toggleUserHandler() {
		if (userIsStudent) {
			studentsCtx.removeStudent(props.user.id);
		} else {
			studentsCtx.addStudent(props.user);
		}
	}

	return (
		<tr>
			<td>{props.user.name}</td>
			<td>Email: {props.user.email}</td>
			<td>
				<button className="btn btn-primary" onClick={toggleUserHandler}>
					{userIsStudent ? "Withdraw" : "Enroll"}
				</button>
			</td>
		</tr>
	);
}

export default User;
