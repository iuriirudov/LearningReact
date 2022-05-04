import Button from "./Button";

function Task(props) {
	function onDeleteTask() {
		console.log("Delete Task");
	}

	return (
		<>
			<li className="list-group-item">
				{props.text} <Button text="Delete" taskName={props.text} onDeleteTask={onDeleteTask} />
			</li>
		</>
	);
}

export default Task;
