import { useState, useEffect } from "react";

import User from "./User";

function UserList() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		getUsers();
	}, []);

	const getUsers = async () => {
		const api = await fetch(`${process.env.REACT_APP_API}/users`);
		const data = await api.json();

		setUsers(data);
	};

	return (
		<table className="table">
			<thead>
				<tr>
					<th scope="col">Name</th>
					<th scope="col">Email</th>
					<th scope="col">Enroll</th>
				</tr>
			</thead>
			<tbody>
				{users.map((user) => {
					return <User key={user.id} user={user} />;
				})}
			</tbody>
		</table>
	);
}

export default UserList;
