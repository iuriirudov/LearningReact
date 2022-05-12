import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { StudentsContextProvider } from "./store/students-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<StudentsContextProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</StudentsContextProvider>
	</React.StrictMode>
);
