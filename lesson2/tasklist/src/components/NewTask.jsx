import Button from "./Button";

function NewTask() {
	function onAddNewTask() {
		console.log("Adding a new Task");
	}

	return (
		<div className="input-group">
			<input type="text" className="form-control" id="newTask" placeholder="Task name" />
			<Button text="Add" onAddTask={onAddNewTask} />
		</div>
	);
}

export default NewTask;
