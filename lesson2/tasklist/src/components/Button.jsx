function Button(props) {
	function deleteTask() {
		props.onDeleteTask();
	}

	function addTask() {
		props.onAddTask();
	}

	return (
		<>
			<button className="btn btn-primary" onClick={props.text === "Delete" ? deleteTask : addTask}>
				{props.text}
			</button>
		</>
	);
}

export default Button;
