import { useRef } from "react";

function NewUserForm() {
	const nameInputRef = useRef();
	const emailInputRef = useRef();

	function submitHandler(event) {
		event.preventDefault();

		const enteredName = nameInputRef.current.value;
		const enteredEmail = emailInputRef.current.value;

		const newUser = {
			name: enteredName,
			email: enteredEmail,
		};
	}

	return (
		<form onSubmit={submitHandler}>
			<div className="mb-3">
				<label htmlFor="name" className="form-label">
					Name
				</label>
				<input ref={nameInputRef} type="text" className="form-control" id="name" aria-describedby="Name" />
			</div>
			<div className="mb-3">
				<label htmlFor="email" className="form-label">
					Email address
				</label>
				<input ref={emailInputRef} type="text" className="form-control" id="email" aria-describedby="Email" />
				<div id="email" className="form-text">
					We'll never share your email with anyone else.
				</div>
			</div>
			<button type="submit" className="btn btn-primary">
				Submit
			</button>
		</form>
	);
}

export default NewUserForm;
