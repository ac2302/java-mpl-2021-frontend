import React from "react";
import Navbar from "./Navbar";
import axios from "axios";
import config from "../config";

import "./NewDailyEventPage.css";

function NewEventPage({ token }) {
	return (
		<div className="new-daily-event">
			<Navbar />
			<div className="body">
				<h2>New Event</h2>
				<p>This event will not repeat every day.</p>

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
							name: e.target.name.value,
							description: e.target.description.value,
						};

						if (body.end < body.start) return alert("invalid time");

						console.log(body);

						axios
							.post(`${config.backend}/schedule-event/`, body, {
								headers: { token },
							})
							.then((res) => {
								console.log(res);
								window.location = "/dashboard";
							});
					}}
				>
					<label htmlFor="name-input">Event Title</label>
					<input type="text" required name="name" id="name-input" />
					<hr />

					<label htmlFor="description-input">Event Description</label>
					<input type="text" name="description" id="description-input" />
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

					<input
						className="btn btn-primary"
						type="submit"
						value="Create Event"
					/>
				</form>
			</div>
		</div>
	);
}

export default NewEventPage;
