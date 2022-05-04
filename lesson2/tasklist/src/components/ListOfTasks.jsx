import Task from "./Task";

function ListOfTasks() {
	const tasks = ["Task One", "Task Two"];

	return (
		<ul className="list-group">
			{/* for (const iterator of tasks) {<Task text={iterator} />} */}
			<Task text="Task One" />
			<Task text="Task Two" />
			<Task text="Task Three" />
			<Task text="Task Four" />
			<Task text="Task Five" />
		</ul>
	);
}

export default ListOfTasks;
