import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import config from "../config";
import "./NewDailyEventPage.css";

function to24h(val) {
	let hours = String(Math.floor(Number(val) / 60));
	let minutes = String(Number(val) % 60);

	if (hours.length === 1) hours = "0" + hours;
	if (minutes.length === 1) minutes = "0" + minutes;

	return `${hours}:${minutes}`;
}

function NewMeetingPage({ token }) {
	const [savedBody, setSavedBody] = useState(null);
	const [freeTime, setFreeTime] = useState(null);
	const [user, setUser] = useState(null);

	useEffect(() => {
		console.log({ dashboardToken: token });
		axios({
			method: "get",
			url: `${config.backend}/auth/self`,
			headers: { token: localStorage.token },
		})
			.then((res) => {
				console.log(res.data.user);
				setUser(res.data.user);
			})
			.catch((err) => {
				console.error({ err });
			});
	}, []);

	return (
		<div className="new-daily-event">
			<Navbar />
			<div className="body">
				<h2>New Meeting</h2>
				<p> </p>

				<form
					onSubmit={(e) => {
						e.preventDefault();

						const body = {
							year: new Date(e.target.date.value).getFullYear(),
							month: new Date(e.target.date.value).getMonth() + 1,
							day: new Date(e.target.date.value).getDate(),
							start:
								Number(e.target.start.value.substr(0, 2)) * 60 +
								Number(e.target.start.value.substr(3)),
							end:
								Number(e.target.end.value.substr(0, 2)) * 60 +
								Number(e.target.end.value.substr(3)),
							duration: Number(e.target.duration.value),
							users: `${e.target.users.value},${user.username}`.split(","),
							// users: e.target.users.value.split(","),
						};

						if (body.end < body.start) return alert("invalid time");

						setSavedBody(body);
						console.log(body);

						axios
							.post(`${config.backend}/schedule-event/meeting`, body, {
								headers: { token: localStorage.token },
							})
							.then((res) => {
								console.log(res);
								setFreeTime(res.data.freeTime);
							})
							.catch((err) => {
								console.error(err);
								alert("invalid user(s)");
							});
					}}
				>
					<label htmlFor="users-input">Users</label>
					<input type="text" required name="users" id="users-input" />
					<hr />

					<label htmlFor="date-input">Event Date</label>
					<input type="date" required name="date" id="date-input" />
					<hr />

					<label htmlFor="start-input">Start Time</label>
					<input type="time" required name="start" id="start-input" />
					<hr />

					<label htmlFor="end-input">End Time</label>
					<input type="time" required name="end" id="end-input" />
					<hr />

					<label htmlFor="duration-input">Duration (In Min)</label>
					<input type="number" required name="duration" id="duration-input" />
					<hr />

					<input
						className="btn btn-primary"
						type="submit"
						value="Find Free Time"
					/>
				</form>

				{freeTime && <Result savedBody={savedBody} freeTime={freeTime} />}
			</div>
		</div>
	);
}

function Result({ savedBody, freeTime }) {
	let adjustedFreeTime = [];

	freeTime.forEach((slot) => {
		if (slot.start < savedBody.start) slot.start = savedBody.start;
		if (slot.end > savedBody.end) slot.end = savedBody.end;

		adjustedFreeTime.push(slot);
	});

	return (
		<div className="result">
			<h4>Free Time</h4>
			{adjustedFreeTime
				.filter((slot) => slot.end - slot.start >= savedBody.duration)
				.map((slot) => (
					<div key={slot.start} className="slot">
						<b>{to24h(slot.start)}</b> to <b>{to24h(slot.end)}</b>
					</div>
				))}
		</div>
	);
}

export default NewMeetingPage;
