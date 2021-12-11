import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import ContactUsPage from "./components/ContactUsPage";
import LoginPage from "./components/LoginPage";

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route exact path="/" element={<HomePage />} />
					<Route exact path="/login" element={<LoginPage />} />
					<Route exact path="/register" element={<LoginPage />} />
					<Route exact path="/contactUs" element={<ContactUsPage />} />
					<Route exact path="/dashboard" element={<h1>dashboard</h1>} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
