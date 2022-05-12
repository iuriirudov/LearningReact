import { useState, useEffect } from "react";

import User from "./User";

function UserList() {
	const [isLoading, setIsLoading] = useState(true);
	const [loadedUsers, setLoadedUsers] = useState([]);

	useEffect(() => {
		setIsLoading(true);
		fetch(`${process.env.REACT_APP_API}/users.json`)
			.then((response) => response.json())
			.then((data) => {
				const users = [];

				for (const key in data) {
					const user = {
						id: key,
						...data[key],
					};
					users.push(user);
				}
				setIsLoading(false);
				setLoadedUsers(users);
			});
	}, []);

	if (isLoading) {
		return (
			<section>
				<p>Loading...</p>
			</section>
		);
	}

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
				{loadedUsers.map((user) => {
					return <User key={user.id} user={user} />;
				})}
			</tbody>
		</table>
	);
}

export default UserList;
