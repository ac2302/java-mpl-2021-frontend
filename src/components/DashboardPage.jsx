import React, { useState, useEffect } from "react";
import axios from "axios";

import config from "../config";
import "./DashboardPage.css";
import { random } from "nanoid";

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
		axios({
			method: "get",
			url: `${config.backend}/auth/self`,
			headers: { token },
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
			<nav
				className="navbar navbar-expand-md navbar-dark bg-dark"
				aria-label="Fourth navbar example"
			>
				<div className="container-fluid">
					<a className="navbar-brand" href="/">
						Meeting Scheduler
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarsExample04"
						aria-controls="navbarsExample04"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarsExample04">
						<ul className="navbar-nav me-auto mb-2 mb-md-0">
							<li className="nav-item">
								<a className="nav-link" href="/">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									New Event
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									New Daily Event
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Schedule Meeting
								</a>
							</li>
						</ul>
						<button
							type="button"
							className="btn btn-danger"
							onClick={() => {
								localStorage.clear();
								window.location = "/";
							}}
						>
							Logout
						</button>
					</div>
				</div>
			</nav>

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

	const start = `${Math.floor(task.start / 60)}:${task.start % 60}`;
	const end = `${Math.floor(task.end / 60)}:${task.end % 60}`;

	return (
		<div className="task">
			<span>{task.name}</span>
			<br />
			<span>
				{start} to {end}
			</span>
			<p>{task.description}</p>
		</div>
	);
}

export default DashboardPage;
