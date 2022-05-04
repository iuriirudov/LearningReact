import { Routes, Route } from "react-router-dom";

import AllUsers from "./pages/AllUsers";
import NewUser from "./pages/NewUser";
import Students from "./pages/Students";

import Navigation from "./components/Navigation";

function App() {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path="/" element={<AllUsers />} />
				<Route path="/new" element={<NewUser />} />
				<Route path="/students" element={<Students />} />
			</Routes>
		</>
	);
}

export default App;
