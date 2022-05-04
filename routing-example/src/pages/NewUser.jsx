import NewUserForm from "../components/NewUserForm";

function NewUser() {
	return (
		<>
			<div className="container">
				<h1>Adding a new user</h1>
				<NewUserForm />
			</div>
		</>
	);
}

export default NewUser;
