import Header from "./components/Header";
import ListOfTasks from "./components/ListOfTasks";
import NewTask from "./components/NewTask";

function App() {
	return (
		<>
			<div className="container">
				<Header />
				<NewTask />
				<ListOfTasks />
			</div>
		</>
	);
}

export default App;
