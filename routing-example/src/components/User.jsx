function User(props) {
	return (
		<tr>
			<td>{props.user.name}</td>
			<td>Email: {props.user.email}</td>
			<td>
				<button className="btn btn-primary">Enroll</button>
			</td>
		</tr>
	);
}

export default User;
