import { Routes, Route } from "react-router-dom";

import AllUsers from "./pages/AllUsers";
import NewUser from "./pages/NewUser";
import Students from "./pages/Students";
import NotFound from "./pages/NotFound";

import Navigation from "./components/Navigation";

function App() {
	return (
		<>
			<Navigation />
			<Routes>
				<Route exact path="/" element={<AllUsers />} />
				<Route exact path="/new" element={<NewUser />} />
				<Route exact path="/students" element={<Students />} />
				<Route exact path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
