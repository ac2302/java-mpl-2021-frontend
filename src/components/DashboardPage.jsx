import React, { useState, useEffect } from "react";
import axios from "axios";

import config from "../config";
import "./DashboardPage.css";
import Navbar from "./Navbar";

function to24h(val) {
	let hours = String(Math.floor(Number(val) / 60));
	let minutes = String(Number(val) % 60);

	if (hours.length === 1) hours = "0" + hours;
	if (minutes.length === 1) minutes = "0" + minutes;

	return `${hours}:${minutes}`;
}

function DashboardPage({ token }) {
	const [user, setUser] = useState(null);
	const [events, setEvents] = useState(null);
	const [dateInputValue, setDateInputValue] = useState(
		new Date().toISOString().substring(0, 10)
	);

	const [date, setDate] = useState({
		year: new Date().getFullYear(),
		month: new Date().getMonth() + 1,
		day: new Date().getDate(),
	});

	// getting user
	useEffect(() => {
		console.log({ dashboardToken: token });
		// axios({
		// 	method: "get",
		// 	url: `${config.backend}/auth/self`,
		// 	headers: { token },
		// })
		axios
			.get(`${config.backend}/auth/self`, {
				headers: { token: localStorage.token },
			})
			.then((res) => {
				console.log(res);
				setUser(res.data.user);
			})
			.catch((err) => {
				console.error({ err });
			});
	}, []);

	// setting events
	useEffect(() => {
		if (user) {
			console.log(user.events);
			setEvents(user.events);
		}
	}, [user]);

	return (
		<div className="dashboard">
			<Navbar />
			{/* body */}

			<div className="body">
				<span>Date: </span>
				<input
					type="date"
					defaultValue={dateInputValue}
					onChange={(e) => setDateInputValue(e.target.value)}
				/>
				<hr />
				{events && (
					<TaskDisplay events={events} dateInputValue={dateInputValue} />
				)}
			</div>
		</div>
	);
}

function TaskDisplay({ events, dateInputValue }) {
	console.log({ wzdfdfs: events });

	const year = new Date(dateInputValue).getFullYear();
	const month = new Date(dateInputValue).getMonth() + 1;
	const day = new Date(dateInputValue).getDate();

	let oneTimeEvents = [];
	events.days.forEach((d) => {
		if (d.year === year && d.month === month && d.day === day) {
			oneTimeEvents = d.events;
		}
	});

	return (
		<div className="tasks">
			{events.daily.map((e) => (
				<Task task={e} key={Math.random()} />
			))}
			{oneTimeEvents.map((e) => (
				<Task task={e} key={Math.random()} />
			))}
		</div>
	);
}

function Task({ task }) {
	console.log(task);

	const start = to24h(task.start);
	const end = to24h(task.end);

	return (
		<div className="task">
			<span>{task.name}</span>
			<hr />
			<span>
				<b>{start}</b> to <b>{end}</b>
			</span>
			<p>{task.description}</p>
		</div>
	);
}

export default DashboardPage;
