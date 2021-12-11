import "./App.css";

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import ContactUsPage from "./components/ContactUsPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

function App() {
	const [token, setToken] = useState(null);

	useEffect(() => {
		if (localStorage.token) setToken(localStorage.token);
	}, []);

	useEffect(() => {
		console.log({ token });
	}, [token]);

	return (
		<div>
			<Router>
				<Routes>
					<Route exact path="/" element={<HomePage />} />
					<Route
						exact
						path="/login"
						element={<LoginPage setToken={setToken} />}
					/>
					<Route exact path="/register" element={<RegisterPage />} />
					<Route exact path="/contactUs" element={<ContactUsPage />} />
					<Route
						exact
						path="/dashboard"
						element={token ? <h1>dashboard</h1> : <HomePage />}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
